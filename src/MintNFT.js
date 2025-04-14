import React, { useState } from "react";
import { getContract } from "../utils/contract";  // Import the contract utility

function MintNFT() {
  const [tokenURI, setTokenURI] = useState("");
  const [mintedTokenId, setMintedTokenId] = useState(null);

  const mintNFT = async () => {
    try {
      // Get the contract instance
      const contract = getContract();
      
      // Call the createToken function of the contract to mint a new NFT
      const transaction = await contract.createToken(tokenURI);
      
      // Wait for the transaction to be mined
      const receipt = await transaction.wait();

      // Extract the tokenId from the receipt
      const mintedTokenId = receipt.events[0].args.tokenId.toString();

      // Set the minted token ID in state
      setMintedTokenId(mintedTokenId);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <div>
      <h1>Mint an NFT</h1>
      <input
        type="text"
        value={tokenURI}
        onChange={(e) => setTokenURI(e.target.value)}
        placeholder="Enter Token URI"
      />
      <button onClick={mintNFT}>Mint NFT</button>

      {mintedTokenId && <p>Minted Token ID: {mintedTokenId}</p>}
    </div>
  );
}

export default MintNFT;
