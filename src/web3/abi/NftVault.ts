export default {
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "_prevAdmin",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "_newAdmin",
          type: "address"
        }
      ],
      name: "ApplyOwnershipAdmin",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "_admin",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "_futureAdmin",
          type: "address"
        }
      ],
      name: "CommitOwnershipAdmin",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "nft",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "wnftId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "wnft",
          type: "address"
        }
      ],
      name: "CreateWrappedNFT",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "redeemer",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "wnftId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nftId",
          type: "uint256"
        }
      ],
      name: "Unwrap",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "creator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "wnftId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nftId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "receivedAmount",
          type: "uint256"
        }
      ],
      name: "Wrap",
      type: "event"
    },
    {
      inputs: [],
      name: "applyOwnershipAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_o",
          type: "address"
        }
      ],
      name: "commitOwnershipAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "feeManager",
      outputs: [
        {
          internalType: "contract IFeeManager",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "futureOwnershipAdmin",
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
      name: "nextWnftId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_wnftId",
          type: "uint256"
        }
      ],
      name: "nftsInWnft",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "nftsLength",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        },
        {
          internalType: "address",
          name: "",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
        }
      ],
      name: "onERC721Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "ownershipAdmin",
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
      inputs: [
        {
          internalType: "contract IFeeManager",
          name: "_feeManager",
          type: "address"
        }
      ],
      name: "setFeeManager",
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
          internalType: "address",
          name: "_strategy",
          type: "address"
        }
      ],
      name: "setStrategy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "strategies",
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
      inputs: [
        {
          internalType: "uint256",
          name: "_wnftId",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_nftId",
          type: "uint256"
        }
      ],
      name: "unwrap",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "wnftAddrToId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "wnftIds",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
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
      name: "wnfts",
      outputs: [
        {
          internalType: "address",
          name: "nftAddr",
          type: "address"
        },
        {
          internalType: "address",
          name: "wnftAddr",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_nftAddr",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256"
        }
      ],
      name: "wrap",
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
      name: "wrappedNfts",
      outputs: [
        {
          internalType: "address",
          name: "nftAddr",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "bool",
          name: "inVault",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
};
