var Storage = artifacts.require("./Storage");


contract("Storage", async(accounts) => {
    it("Should store a number", async() => {

        var iStorage = await Storage.deployed();


        var expectedValue = 12;
        iStorage.LogAddedUint({}).watch(async(err, res) => {
            if (err != null) {
                assert.equal(1,2,err);
            }
            var receivedNumber = await iStorage.getInt(res.args.key.toNumber());

            assert.equal(receivedNumber.toNumber(), expectedValue,
                "Storage mismatch");
        });

        await iStorage.addNew(expectedValue);
    });
});
