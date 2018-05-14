pragma solidity 0.4.23;


contract Token {

    mapping (address => uint) _balances;


    constructor() public {
        _balances[msg.sender] = 1000000;
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
