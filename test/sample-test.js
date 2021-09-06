const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return correct tokenURIs", async function () {
    const LootName = await ethers.getContractFactory("LootName");
    const lootName = await LootName.deploy();
    await lootName.deployed();

    console.log(await lootName.tokenURI(3639))
    console.log(await lootName.tokenURI(1))
    console.log(await lootName.tokenURI(8001))
  });
});
