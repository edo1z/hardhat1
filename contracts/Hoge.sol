//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract a1 {
    uint8 x1 = 1;
    function getX1() external view returns (uint8) {
        return x1;
    }
}

contract a2 {
    uint8 x2 = 2;
}

contract b is a1, a2 {
}