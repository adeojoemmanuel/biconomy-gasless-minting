require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan");



const mumbaiUrl = process.env.ALCHEMY_POLYGON_URL
	? process.env.ALCHEMY_POLYGON_URL
	: ""

module.exports = {
	solidity: {
		version: '0.8.10',
		settings: {
		  optimizer: {
			enabled: true,
			runs: 800,
		  },
		},
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: mumbaiUrl,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: process.env.ETHER_SCAN_KEY
	},
}
