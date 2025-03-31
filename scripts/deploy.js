const hre = require("hardhat");

async function main() {
    //Deploy ERC20 Token
    const DEVECC20 = await hre.ethers.getContractFactory("DEVECC20");
    const devEcc20 = await DEVECC20.deploy();
    await devEcc20.waitForDeployment();
    console.log("DEVECC20 is deployed to:", devEcc20.target);

    //Deploy Staking Contract
    const Staking = await hre.ethers.getContractFactory("Staking");
    const staking = await Staking.deploy(devEcc20.target);
    await staking.waitForDeployment();
    console.log("Staking contract is deployed at:", staking.target);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});

