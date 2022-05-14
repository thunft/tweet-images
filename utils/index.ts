import { config } from "config";
import { ethers } from "ethers";
import NFTCOLLECTIONS_CONTRACT from "contracts/NFTCollections.json";

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(config.mumbaiUrl)
}

export const getContractNFTCollections = () => {
  return new ethers.Contract(config.contractAddress, NFTCOLLECTIONS_CONTRACT.abi, getProvider());
}