const hre = require("hardhat");

async function main() {
    const DEVECC20 = await hre.ethers.getContractFactory("DEVECC20");
    const devEcc20 = await DEVECC20.deploy();
    await devEcc20.waitForDeployment();
    console.log("DEVECC20 is deployed to:", devEcc20.target);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});

