import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks: {
    host: "127.0.0.1",
    hardhat: {
        chainId: 1337
    }
  } 
}

