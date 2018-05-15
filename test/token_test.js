var Token = artifacts.require("Token");

contract("Token", async(accounts) => {

    it("Should have a million tokens in the beginning", async() => {

        var expectedValue = 1000000;

        var iToken = await Token.deployed();
        var balance = await iToken.getBalance(accounts[0]);

        assert.equal(balance, expectedValue, "Balance not a million");
    });

    it("Should send tokens to another account", async() => {

        var transferAmount = 1000;

        var iToken = await Token.deployed();

        var senderInitialBalance = await iToken.getBalance(accounts[0]);
        var receiverInitialBalance = await iToken.getBalance(accounts[1]);

        await iToken.transfer(accounts[1], transferAmount);

        var senderEndBalance = await iToken.getBalance(accounts[0]);
        var receiverEndBalance = await iToken.getBalance(accounts[1]);

        console.log("Receiver initial balance: " + receiverInitialBalance);
        console.log("Sender initial balance: " + senderInitialBalance);

        console.log("Receiver end balance: " + receiverEndBalance);
        console.log("Sender end balance: " + senderEndBalance);

        assert.equal(senderInitialBalance.toNumber(), (senderEndBalance.toNumber()
         + transferAmount), "Did not send properly");
        assert.equal(receiverInitialBalance.toNumber(),
            (receiverEndBalance.toNumber() - transferAmount),
            "Did not send properly receiver");
    });

});
