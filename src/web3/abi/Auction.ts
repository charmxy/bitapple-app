export default {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "offerId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "nftOwner",
          type: "address"
        }
      ],
      name: "AcceptOffer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "offerId",
          type: "uint256"
        }
      ],
      name: "CancelOffer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8"
        }
      ],
      name: "Initialized",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "offerId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "nft",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "expiry",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "offerMaker",
          type: "address"
        }
      ],
      name: "MakeOffer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_offerId",
          type: "uint256"
        }
      ],
      name: "acceptOffer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_offerId",
          type: "uint256"
        }
      ],
      name: "cancelOffer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_nft",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_expiry",
          type: "uint256"
        }
      ],
      name: "makeOffer",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "offers",
      outputs: [
        {
          internalType: "address",
          name: "nft",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "expiry",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "offerMaker",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};
