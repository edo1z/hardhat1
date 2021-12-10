//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Hoge {
    receive() external payable {}
    function getContractBalance() external view returns (uint) {
        return address(this).balance;
    }
}
