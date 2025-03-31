DEVECC20 Token

DEVECC20 is a custom ERC-20 token built with Solidity and deployed on the Ethereum Sepolia testnet. This project showcases expertise in smart contract development, staking mechanisms, and CI/CD automation using Hardhat and GitLab pipelines.

The token includes minting, burning, pausing/unpausing, and a staking contract where users earn a 10% reward on their staked tokens.

🔹 Features

DEVECC20 Token
✔ ERC-20 Standard
✔ Role-Based Access Controle with Roles: MINTER_ROLE, PAUSER_ROLE
✔ Minting (only MINTER_ROLE)
✔ Burning (Anyone can burn their own tokens)
✔ Pausing & Unpausing (Address with PAUSER_ROLE can pause/unpause transfers)


Staking Contract
✔ Stake DEVECC20 Tokens
✔ Earn 10% Rewards (Rewards distributed based on staked amount)
✔ Unstake at any time

🔹 Deployment Details
Token Name: DEVECC20

Symbol: DEV20

Initial Supply: 1,000,000 DEV20

Staking Reward Rate: 10%

Network: Ethereum Sepolia Testnet

Contract Addresses:

    DEVECC20 Token: 0x55ebB99c32229E2393B7B32090922404387532D5

    Staking Contract: 0xa7e4Bd7f56C08154f696Aa0C2c4D34576989317e

    Etherscan DevEcc20: https://sepolia.etherscan.io/address/0x55ebB99c32229E2393B7B32090922404387532D5#code
    Etherscan Staking-DevEcc20: https://sepolia.etherscan.io/address/0xa7e4Bd7f56C08154f696Aa0C2c4D34576989317e#code

🔹 Setup & Deployment

Install Dependencies
npm install

Compile Smart Contract
npx hardhat compile

Deploy Smart Contract
npx hardhat run scripts/deploy.js --network SepoliaTestnet

Verify Contracts on Etherscan
npx hardhat verify --network SepoliaTestnet YOUR_CONTRACT_ADDRESS




