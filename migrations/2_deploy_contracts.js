var Token = artifacts.require("./Token.sol");
var TokenManager = artifacts.require("./TokenManager.sol");
var ZBCoin = artifacts.require("./ZBCoin.sol");
var Storage = artifacts.require("./Storage.sol");


module.exports = function(deployer) {

    deployer.deploy(Token)
        .then(() => Token.deployed())
        .then(() => deployer.deploy(TokenManager, Token.address));

    deployer.deploy(ZBCoin);
    deployer.deploy(Storage);
    // <ImeUgovora>.deployed().then((i) => { i<ImeUgovora> = i });

}
