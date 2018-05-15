pragma solidity 0.4.23;

import "./Token.sol";


contract TokenManager {

    AbsToken[] private _managedTokens;
    address private _owner;

    constructor(AbsToken initialToken) public {
        _managedTokens.push(initialToken);
        _owner = msg.sender;
    }

    function addNewToken(AbsToken newToken) public {
        require(msg.sender == _owner);
        _managedTokens.push(newToken);
    }


    function getToken(uint position) public constant returns (AbsToken) {
        require(address(_managedTokens[position]) != address(0)); // Token exists
        return _managedTokens[position];
    }
}
