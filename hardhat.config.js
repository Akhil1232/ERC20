require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    SepoliaTestnet: {
      url: "https://sepolia.infura.io/v3/a089b0fa21ff415889b3fd5609c4e2d9",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
