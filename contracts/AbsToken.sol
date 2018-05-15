pragma solidity 0.4.23;


contract AbsToken {

    event LogTransfer(address sender, address receiver, uint value);

    function totalSupply() public constant returns (uint);

    function transfer(address receiver, uint value) public;

    function getBalance(address account) public constant returns (uint);

}
