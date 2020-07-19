const path = require("path");

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    local: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    goerli: {
      provider: () => {
        const mnemonic = process.env["MNEMONIC"]
        return new HDWalletProvider(
          mnemonic,
          "https://goerli.infura.io/v3/41a7edba555441859a807aeb290d158b"
        )
      },
      network_id: "5"
    }
  }
};
