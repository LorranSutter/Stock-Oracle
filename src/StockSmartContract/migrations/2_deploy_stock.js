const fs = require('fs');
const path = require('path');
const Stock = artifacts.require("Stock");

module.exports = function (deployer) {
    deployer
        .deploy(Stock)
        .then(() => {
            const stockAddress = JSON.stringify({ address: Stock.address });
            fs.writeFile(path.resolve(__dirname, '..', 'build', 'StockAddress.json'), stockAddress, err => {
                if (err) {
                    console.error(err)
                    return
                }
            });
        });
};