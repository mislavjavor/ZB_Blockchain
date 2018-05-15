pragma solidity 0.4.23;

import "./AbsToken.sol";



contract ZBCoin is AbsToken {

    mapping (address => uint) _balances;

    uint private TOTAL_SUPPLY = 2 000 000;

    constructor() public {
        _balances[msg.sender] = TOTAL_SUPPLY;
    }

    function totalSupply() public constant returns (uint) {
        return TOTAL_SUPPLY;
    }

    function transfer(address to, uint amount) public {

        require(_balances[msg.sender] > amount);

        _balances[msg.sender] -= amount;
        _balances[to] += amount;
    }

    function getBalance(address account) public constant returns (uint) {
        return _balances[account];
    }

}
