import { expect } from "chai";
import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

describe("NftStorage", function () {
  it("Should return my address from ownerOf() after mint", async function () {
    const NftStorage = await ethers.getContractFactory("NftStorage");
    const nft = await NftStorage.deploy();
    await nft.deployed();
    console.log("Contract address: ", nft.address);

    const addr = process.env.MINT_ADDRESS ? process.env.MINT_ADDRESS : "";
    const tokenURI = process.env.METADATA_URI ? process.env.METADATA_URI : "";
    const mintTx = await nft.mint(addr, tokenURI);
    console.log("mint tx:", mintTx);
    await mintTx.wait();

    expect(await nft.ownerOf(1)).to.equal(addr);
    const tokenUriOfMyNft = await nft.tokenURI(1);
    expect(tokenUriOfMyNft).to.equal(tokenURI);
  });
});
