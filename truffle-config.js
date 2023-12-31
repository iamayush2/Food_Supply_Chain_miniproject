/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
// tr;
// const HDWalletProvider = require("truffle-hdwallet-provider");

// const fs = require("fs");
// const infuraKey = fs.readFileSync(".infurakey").toString().trim();
// const MNEMONIC = fs.readFileSync(".secret").toString().trim();
// const FROMADDRESS = fs.readFileSync(".fromaddress").toString().trim();

// const infuraRinkebyURL = "https://rinkeby.infura.io/v3/" + infuraKey;
// const maticMumbaiURL = "https://rpc-mumbai.matic.today";

// module.exports = {
//   /**
//    * Networks define how you connect to your ethereum client and let you set the
//    * defaults web3 uses to send transactions. If you don't specify one truffle
//    * will spin up a development blockchain for you on port 9545 when you
//    * run `develop` or `test`. You can ask a truffle command to use a specific
//    * network from the command line, e.g
//    *
//    * $ truffle test --network <network-name>
//    */

//   networks: {
//     // Useful for testing. The `development` name is special - truffle uses it by default
//     // if it's defined here and no other network is specified at the command line.
//     // You should run a client (like ganache-cli, geth or parity) in a separate terminal
//     // tab if you use this network and you must also set the `host`, `port` and `network_id`
//     // options below to some value.
//     //
//     development: {
//       host: "127.0.0.1", // Localhost (default: none)
//       port: 8545, // Standard Ethereum port (default: none)
//       network_id: "*", // Any network (default: none)
//     },

//     rinkeby: {
//       provider: function () {
//         return new HDWalletProvider(MNEMONIC, infuraRinkebyURL, 1);
//       },
//       network_id: 4,
//       from: FROMADDRESS, // account from which to deploy
//     },

//     mumbai: {
//       provider: function () {
//         return new HDWalletProvider(MNEMONIC, maticMumbaiURL);
//       },
//       network_id: 80001,
//       confirmations: 2,
//       timeoutBlocks: 200,
//       skipDryRun: true,
//     },
//   },

//   // Set default mocha options here, use special reporters etc.
//   mocha: {
//     // timeout: 100000
//   },

//   // Configure your compilers
//   compilers: {
//     solc: {
//       // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
//       // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
//       // settings: {          // See the solidity docs for advice about optimization and evmVersion
//       //  optimizer: {
//       //    enabled: false,
//       //    runs: 200
//       //  },
//       //  evmVersion: "byzantium"
//       // }
//     },
//   },
// };

const infuraKey = "f58e1e694082468d898e6c7ee2a4648d"; // Make sure this matches your Infura Project ID
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // other configurations
  networks: {
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          "<your-mnemonic>",
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: "*",
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    development: {
      host: "127.0.0.1",
      port: 7545, // Update this to the correct port for your development network
      network_id: "5777", // You can use "*" for any network id
    },
  },
  // other configurations
};
