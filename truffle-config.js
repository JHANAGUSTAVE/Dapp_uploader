// require('babel-register');
// require('babel-polyfill');
// require('dotenv').config();
// const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
// const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000
    }
  },
  contracts_directory: './src/contracts/',
  // contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        }
      }
    }
  }
};
