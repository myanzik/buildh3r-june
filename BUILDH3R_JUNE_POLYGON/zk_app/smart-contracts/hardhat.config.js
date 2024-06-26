require("@nomicfoundation/hardhat-toolbox");

// Configure env variables
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.21",
  networks: {
    hardhat: {
      loggingEnabled: false
    },
    ethereum: {
      chainId: 1,
      url: "https://rpc.ankr.com/eth",
      forking: {
        url: "https://rpc.ankr.com/eth"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    },
    goerli: {
      chainId: 5,
      url: "https://rpc.ankr.com/eth_goerli",
      forking: {
        url: "https://rpc.ankr.com/eth_goerli"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    },
    polygonPos: {
      chainId: 137,
      url: "https://rpc.ankr.com/polygon",
      forking: {
        url: "https://rpc.ankr.com/polygon"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    },
    polygonMumbai: {
      chainId: 80001,
      url: "https://rpc.ankr.com/polygon_mumbai",
      forking: {
        url: "https://rpc.ankr.com/polygon_mumbai"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    },
    polygonZkevm: {
      chainId: 1101,
      url: "https://rpc.ankr.com/polygon_zkevm",
      forking: {
        url: "https://rpc.ankr.com/polygon_zkevm"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    },
    polygonZkevmTestnet: {
      chainId: 2442,
      url: "https://rpc.cardona.zkevm-rpc.com",
      forking: {
        url: "https://rpc.cardona.zkevm-rpc.com"
      },
      accounts: [process.env.PRIVATE_KEY_DEPLOYER]
    }
  }
};

module.exports = config;
