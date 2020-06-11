import Web3 from 'web3';

import { address as STOCK_ORACLE_ADDRESS } from './StockSmartContract/build/StockAddress.json';
import { abi as STOCK_ORACLE_ABI } from './StockSmartContract/build/contracts/Stock.json';

let web3;
let stockQuote;

(async () => {
    web3 = new Web3("http://127.0.0.1:9545/");
    stockQuote = new web3.eth.Contract(STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS);
})();

const web3Oracle = {

    async setStock(symbol, price, volume) {
        const accounts = await web3.eth.getAccounts();
        return await stockQuote.methods
            .setStock(web3.utils.fromAscii(symbol), price, volume)
            .send({ from: accounts[0] });
    },

    async getStockPrice(symbol) {
        return await stockQuote.methods
            .getStockPrice(web3.utils.fromAscii(symbol))
            .call();
    },

    async getStockVolume(symbol) {
        return await stockQuote.methods
            .getStockVolume(web3.utils.fromAscii(symbol))
            .call();
    }
}

export default web3Oracle;