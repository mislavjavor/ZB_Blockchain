pragma solidity 0.4.23;

import "./Token.sol";


contract ZBCoin is Token {
    uint private TOTAL_SUPPLY = 2000000;

    constructor() public {
        _balances[msg.sender] = TOTAL_SUPPLY;
    }
}
