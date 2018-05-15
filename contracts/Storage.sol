pragma solidity 0.4.23;


contract Storage {

    event LogAddedUint(uint key, uint value);

    uint[] private _store;

    function addNew(uint value) public {
        _store.push(value);

        emit LogAddedUint(_store.length - 1, value);
    }

    function getInt(uint position) public constant returns (uint) {
        return _store[position];
    }
}
