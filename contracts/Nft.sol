// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract nft is ERC721 {
    uint tokenId = 0;
    function _baseURI() override internal pure returns (string memory) {
        return "https://example.com/nft/";
    }
    constructor() ERC721 ("hoge", "HOG") {} 
    function mint(address to) external {
        tokenId++;
        _mint(to, tokenId);
    }
}
