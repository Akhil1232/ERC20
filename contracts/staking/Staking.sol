//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is Ownable {
    IERC20 public immutable token;
    uint256 public rewardRate = 10; //10% rewardRate

    struct StakeInfo {
        uint256 amount;
        uint256 startTime;
    }

    mapping(address => StakeInfo) public stakes;

    constructor(address tokenAddress) Ownable(msg.sender) {
        token = IERC20(tokenAddress);
    }

    function stake(uint256 amount) public {
        require(amount > 0, "Cannot stake 0 tokens");
        token.transferFrom(msg.sender, address(this), amount);

        stakes[msg.sender] = StakeInfo({
            amount: stakes[msg.sender].amount + amount,
            startTime: block.timestamp
        });
    }

    function unstake() public {
        StakeInfo memory stakeInfo = stakes[msg.sender];
        require(stakeInfo.amount > 0, "No staked tokens");

        uint256 duration = block.timestamp - stakeInfo.startTime;
        uint256 reward = (stakeInfo.amount * rewardRate * duration) / (365 days * 100);

        token.transfer(msg.sender, stakeInfo.amount + reward);
        delete stakes[msg.sender];
    }
}