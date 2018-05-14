var Token = artifacts.require("./Token.sol");
var TokenManager = artifacts.require("./TokenManager.sol");

module.exports = function(deployer) {

    deployer.deploy(Token)
        .then(() => Token.deployed())
        .then(() => deployer.deploy(TokenManager, Token.address))


}
