pragma solidity ^0.5.16;

contract Greeter {

    string public greeting = "Hello, World!";

    function updateGreeting(string calldata _greeting) external {
        greeting = _greeting;
    }
}
