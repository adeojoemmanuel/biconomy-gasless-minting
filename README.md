# Gasless Minting using biconomy.io

## Table of Contents
- [Deployed Website url](#deployed-website-url)
- [Deployed Contract Address](#deployed-contract-address)
- [Clone, Install and Build steps](#clone-install-and-build-steps)
  - [Prerequisites](#prerequisites)
  - [Cloning and installing dependencies](#cloning-and-installing-dependencies)
  - [Running the frontend](#running-the-frontend)
  - [Environment variables](#environment-variables)

## Deployed Website url

https://

## Deployed Contract Address

`Custom approach Contract deployed to: 0xA59718944B7B82f06bEaBa465F2F38644206AA33`


`EIP2771 approach Contract deployed to: 0x325Db85065875Fc690396765Eea6aD7F1A62ABE5`

## Clone, Install, test and Build steps for client and sm

### Prerequisites

1. [Git](https://git-scm.com/)
2. [Node JS](https://nodejs.org/en/) (everything was installed and tested under v16.18.0)
3. A Browser with the [MetaMask extension](https://metamask.io/) installed.
4. [HardHat] (https://hardhat.org/) for deploying smart contract
<br>

### Cloning and installing dependencies

1. Clone the project repository on your local machine

```
 git clone https://github.com/adeojoemmanuel/biconomy-gasless-minting.git
 cd gasless-minting
```

2. Installing dependencies

-   For contracts -
    ```
    npm install
    ```
-   For client -
    ```
    cd client
    npm install
    ```

### Running the frontend

For running frontend locally run command:

```
cd client
npm run dev
```
### deploying the smart contract

For deploying  the smart contract  run command:

- from the root directory

```
npx hardhat compile
```

```
  npx hardhat run scripts/deploy.js --network mumbai
```

###  test

```npx mocha test/test.js```

```npx mocha test/test2771.js```



### Environment variables

- create a file name ```.env``` in the root directory

```
ALCHEMY_POLYGON_URL = ''
ACCOUNT_KEY = ''
```
