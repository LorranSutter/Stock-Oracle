// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

contract Stock {
    struct StockInfo {
        uint256 price;
        uint256 volume;
    }

    mapping(bytes4 => StockInfo) stockQuote;

    address oracleOwner;

    constructor() public {
        oracleOwner = msg.sender;
    }

    function setStock(
        bytes4 symbol,
        uint256 price,
        uint256 volume
    ) public {
        StockInfo memory newStock = StockInfo(price, volume);
        stockQuote[symbol] = newStock;
    }

    function getStockPrice(bytes4 symbol) public view returns (uint256) {
        return stockQuote[symbol].price;
    }

    function getStockVolume(bytes4 symbol) public view returns (uint256) {
        return stockQuote[symbol].volume;
    }
}
