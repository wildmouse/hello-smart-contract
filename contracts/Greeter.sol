pragma solidity ^0.5.16;

contract Greeter {

    string greeting = "Hello, World!";

    function greet() public view returns (string memory) {
        return greeting;
    }

    function updateGreeting(string calldata _greeting) external {
        greeting = _greeting;
    }
}
