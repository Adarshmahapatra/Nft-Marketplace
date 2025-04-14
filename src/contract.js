import { ethers } from "ethers";
import NFTMarketplace from "../constants/NFTMarketplace.json";

// The contract address for your deployed contract
const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const contractABI = NFTMarketplace.abi;

export const getContract = () => {
  if (!window.ethereum) throw new Error("MetaMask not found");

  // Connect to the Ethereum provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner(); // Sign transactions with the MetaMask account

  // Return the contract instance
  return new ethers.Contract(contractAddress, contractABI, signer);
};
