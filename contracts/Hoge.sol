//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hoge {
    event Deposit(address indexed _from, uint256 _value, uint256 _balance);

    receive() external payable {
        uint256 balance = getContractBalance();
        emit Deposit(msg.sender, msg.value, balance);
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
