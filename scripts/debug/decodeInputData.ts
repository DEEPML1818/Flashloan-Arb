
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

import ArbitrageABI from "../../artifacts/contracts/Arbitrage.sol/Arbitrage.json";

async function main() {
  const iface = new ethers.utils.Interface(ArbitrageABI.abi);
  const data = iface.decodeFunctionData(
    "executeTrade",
    "0xa2a1623d000000000000000000000000000000000000000000001fea7b93aad2728acd550000000000000000000000000000000000000000000000000000000000000080000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266000000000000000000000000000000000000000000000000000000006ee9bddd0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000b31f66aa3c1e785363f0875a1b74e27b85fd66c70000000000000000000000000aa4ef05b43700bf4b6e6dc83ea4e9c2cf6af0fa"
  );

  console.log("data", data);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
