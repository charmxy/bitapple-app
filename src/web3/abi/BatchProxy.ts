export default {
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_vault",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_nfts",
          type: "address[]"
        },
        {
          internalType: "uint256[]",
          name: "_tokenIds",
          type: "uint256[]"
        }
      ],
      name: "batchWrap",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "vault",
      outputs: [
        {
          internalType: "contract NFTVault",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
};
