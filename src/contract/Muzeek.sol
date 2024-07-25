// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Muzeek {
    struct User {
        address userAddress;
        uint256 amountPaid;
    }

    mapping(address => User) public users;

    event PaymentReceived(address indexed user, uint256 amount);
    event Withdrawal(address indexed user, uint256 amount);

    function makePayment() public payable {
        require(msg.value > 0, "Payment must be greater than 0");

        if (users[msg.sender].userAddress == address(0)) {
            users[msg.sender] = User(msg.sender, msg.value);
        } else {
            users[msg.sender].amountPaid += msg.value;
        }

        emit PaymentReceived(msg.sender, msg.value);
    }

    function getUserPayment(address userAddress) public view returns (uint256) {
        return users[userAddress].amountPaid;
    }

    function withdraw(uint256 amount) public {
        require(amount <= address(this).balance, "Insufficient contract balance");
        payable(msg.sender).transfer(amount);

        emit Withdrawal(msg.sender, amount);
    }

    receive() external payable {
        makePayment();
    }
}
