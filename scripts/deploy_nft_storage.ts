import { ethers } from "hardhat";

async function main() {
  const NftStorage = await ethers.getContractFactory("NftStorage");
  const nftStorage = await NftStorage.deploy();
  await nftStorage.deployed();
  console.log("NftStorage deployed to:", nftStorage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
