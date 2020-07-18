pragma solidity >=0.5.16 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Greeter.sol";

contract TestGreeter {
    function testGreet() public {
        Greeter greeter = Greeter(DeployedAddresses.Greeter());
        string memory expected = "Hello, World!";
        Assert.equal(greeter.greet(), expected, "Greeter message should equals to expected.");
    }
}
