const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DEVECC20", function() {
    let DEVECC20, devEcc20, owner, addr1;

    beforeEach(async function() {
        DEVECC20 = await ethers.getContractFactory("DEVECC20");
        [owner, addr1] = await ethers.getSigners();
        devEcc20 = await DEVECC20.deploy();
        await devEcc20.waitForDeployment();
    });

    it("Should have correct initial supply", async function () {
        const totalSupply = await devEcc20.totalSupply();
        expect(totalSupply).to.equal(ethers.parseEther("1000000"));
    });

    it("Should mint tokens", async function () {
        await devEcc20.mint(addr1.address, ethers.parseEther("1000"));
        const balance = await devEcc20.balanceOf(addr1.address);
        expect(balance).to.equal(ethers.parseEther("1000"));
    })

    it("Shoud burn tokens", async function () {
        await devEcc20.burn(ethers.parseEther("500"));
        const balance = await devEcc20.balanceOf(owner.address);
        expect(balance).to.equal(ethers.parseEther("999500"));
    });
});