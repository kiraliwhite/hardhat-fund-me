const { getNamedAccounts, ethers } = require("hardhat");

// async function main() {
// 等同於上面那行
const main = async () => {
  // const { deployer } = await getNamedAccounts();
  // 等同於上面那行
  const deployer = (await getNamedAccounts()).deployer;
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding Contract...");
  // let sendValue = ethers.utils.parseEther("0.01");
  // const transactionResponse = await fundMe.fund({value: sendValue})
  // 等同於上面兩行
  const transactionResponse = await fundMe.fund({
    value: ethers.utils.parseEther("0.01"),
  });
  await transactionResponse.wait(1);
  console.log("Funded!");
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
