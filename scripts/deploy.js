const hre = require("hardhat");
async function main() {
  const Twitter = await hre.ethers.getContractFactory("Twitter");
  const twitter = await Twitter.deploy();
  await twitter.deployed();
  console.log("Twitter contract deployed to:", twitter.address);
}

main().catch((error) => { console.error(error); process.exitCode = 1; }); 

// npx hardhat run scripts/deploy.js --network mumbai 


