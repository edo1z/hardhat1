//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Hoge {
    uint256 x = 1;

    fallback() external {
        x = 1;
    }

    function a(uint256 b) external returns (uint256) {
        require(x < 10, 'invalid x');
        uint256 ans = x * b;
        x++;
        return ans;
    }
}
