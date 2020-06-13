# Stock Oracle

Oracle implementation using Solidity, Truffle and API of stock market info presented as lab assingment for BCDV1011 - Design Patterns for Blockchain from <a href='https://www.georgebrown.ca/programs/blockchain-development-program-t175/'>Blockchain Development</a> program from <a href='https://www.georgebrown.ca'>George Brown College</a>.

<p align='center'>
<img src='https://res.cloudinary.com/lorransutter/image/upload/v1591890398/Stock_Oracle.gif' height=300/>
</p>

<!-- ## :hospital: Description

ERC-721 based to tokenize patients allocated in a hospital.

Each patient is holded by a single hospital and only this hospital can retrieve personal information of the patient and transfer to another hospital if needed.

When a patient is added, a new token is minted to a target hospital with patient information and the address of an emergency hospital as well.

If the patient status is changed to Critical, the Patient token is transfered to the emergency hospital.

You can check the deployed contract in Etherscan [here](https://ropsten.etherscan.io/address/0xebb2bb4b323e65b4b4819b4d1cec4164f9a6eb64). -->

## :runner: How to run

Open your terminal in the folder you want to clone the project

```sh
# Clone this repo
git clone https://github.com/LorranSutter/Stock-Oracle.git

# Go to the project folder
cd Stock-Oracle

# Install dependencies
yarn
```

Now you will need two opened terminals to run the project. One for truffle to simulate the EVM and another one for the frontend.

Truffle will run on http://127.0.0.1:9545/

Frontend will run on http://localhost:3000/

```sh
## In the first terminal ##

# Go to smart contract folder
cd src/StockSmartContract

# Init truffle
truffle develop

# Run migrations
migrate
```

The last command above will generate a new ABI and write contract address in a JSON file. You do not have to worry about importing these info in the frontend though. Also you may change the smart contract and run migrations again to see your changes.

```sh
## In the another terminal ##

# Go to frontend application
cd ..

# Run the project
yarn start
```

## :book: References

- [Alpha Vantage](https://www.alphavantage.co/) - stock API
- [web3 calls](https://bitsofco.de/calling-smart-contract-functions-using-web3-js-call-vs-send/)

## :computer: Technologies

- [Solidity](https://solidity.readthedocs.io/) - smart contract programming language
- [Truffle](https://www.trufflesuite.com/) - dApp environment
- [React](https://reactjs.org/) - frontend library
- [Polaris](https://polaris.shopify.com/) - design system
- [Axios](https://www.npmjs.com/package/axios) - HTTP requests
- [Web3.js](https://web3js.readthedocs.io/) - interact with smart contracts
