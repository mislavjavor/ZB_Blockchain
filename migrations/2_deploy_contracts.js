var Token = artifacts.require("./Token.sol");
var TokenManager = artifacts.require("./TokenManager.sol");
var ZBCoin = artifacts.require("./ZBCoin.sol");

module.exports = function(deployer) {

    deployer.deploy(Token)
        .then(() => Token.deployed())
        .then(() => deployer.deploy(TokenManager, Token.address));

    deployer.deploy(ZBCoin);

    // <ImeUgovora>.deployed().then((i) => { i<ImeUgovora> = i });

}
