import Web3 from 'web3';

import { address as STOCK_ORACLE_ADDRESS } from './Oracle/build/StockAddress.json';
import { abi as STOCK_ORACLE_ABI } from './Oracle/build/contracts/Stock.json';

let web3;
// let accounts;
let stockQuote;

(async () => {
    web3 = new Web3("http://127.0.0.1:9545/");
    // accounts = await web3.eth.getAccounts()
    // console.log("Account 0 = ", accounts[0])
    stockQuote = new web3.eth.Contract(STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS);
    // console.log(stockQuote);
})();

const web3Oracle = {

    // console.log(STOCK_ORACLE_ABI);
    // console.log(STOCK_ORACLE_ADDRESS);

    async setStock(symbol, price, volume) {
        const accounts = await web3.eth.getAccounts();
        return await stockQuote.methods
            // .setStock(web3.utils.fromAscii(symbol), web3.utils.toBN(price), web3.utils.toBN(volume))
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