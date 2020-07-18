pragma solidity >=0.5.16 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Greeter.sol";

contract TestGreeter {

    Greeter greeter;

    function beforeEach() public {
        greeter = Greeter(DeployedAddresses.Greeter());
    }

    function testGreet() public {
        string memory expected = "Hello, World!";
        Assert.equal(greeter.greet(), expected, "Greeter message should equals to expected.");
    }

    function testUpdateGreeting() public {
        greeter.updateGreeting("Hello, Solidity!");
        string memory expected = "Hello, Solidity!";
        Assert.equal(greeter.greet(), expected, "Greeter should be updated");
    }
}
