const Greeter = artifacts.require("./Greeter.sol");

contract("Greeter", (accounts) => {
  it("should return greeting", async () => {
    const greeterInstance = await Greeter.deployed();

    const greeting = await greeterInstance.greet();

    assert.equal(greeting, "Hello, World!", "Greeting should match to expected.");
  })
})
