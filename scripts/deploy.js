//deploy.js
const hre = require("hardhat");
async function main() {
    // ethers is avaialble in the global scope
    const [deployer] = await hre.ethers.getSigners();
    console.log(
      "Deploying the contracts with the account:",
      await deployer.getAddress()
    );

    console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy();

    await token.waitForDeployment();    

    console.log("Token address:", token.target);

  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
