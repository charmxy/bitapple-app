export default {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "collection",
          type: "address"
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string"
        },
        {
          indexed: false,
          internalType: "string",
          name: "symbol",
          type: "string"
        },
        {
          indexed: false,
          internalType: "string",
          name: "collectionMetadataURI",
          type: "string"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "cap",
          type: "uint256"
        }
      ],
      name: "CreateCollection",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string"
        },
        {
          internalType: "string",
          name: "_symbol",
          type: "string"
        },
        {
          internalType: "string",
          name: "_contractURI",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "_cap",
          type: "uint256"
        }
      ],
      name: "createCollection",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};
