export default {
  abi: [
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
          name: "",
          type: "uint256"
        }
      ],
      name: "addrNFTCollectibleKeys",
      outputs: [
        {
          internalType: "contract NFTCollectible",
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
          internalType: "address",
          name: "",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "addrNFTCollectibleMap",
      outputs: [
        {
          internalType: "contract NFTCollectible",
          name: "nftAddr",
          type: "address"
        },
        {
          internalType: "string",
          name: "name",
          type: "string"
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string"
        },
        {
          internalType: "string",
          name: "baseImageURI",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "allNFTCollectibleMintHistory",
      outputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "contract NFTCollectible",
                  name: "nftAddr",
                  type: "address"
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string"
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string"
                },
                {
                  internalType: "string",
                  name: "baseImageURI",
                  type: "string"
                }
              ],
              internalType: "struct NFTCollectibleFactory.NFTCollectibleInfo",
              name: "nftCollectibleInfo",
              type: "tuple"
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string"
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string"
                },
                {
                  internalType: "string",
                  name: "externalLink",
                  type: "string"
                },
                {
                  internalType: "string",
                  name: "nftImage",
                  type: "string"
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256"
                }
              ],
              internalType: "struct NFTCollectible.NFTInfo[]",
              name: "nftInfos",
              type: "tuple[]"
            }
          ],
          internalType: "struct NFTCollectibleFactory.NFTCollectibleMintInfo[]",
          name: "",
          type: "tuple[]"
        }
      ],
      stateMutability: "view",
      type: "function"
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
          internalType: "string",
          name: "_baseURI",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "_supply",
          type: "uint256"
        }
      ],
      name: "deploy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "list",
      outputs: [
        {
          components: [
            {
              internalType: "contract NFTCollectible",
              name: "nftAddr",
              type: "address"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              internalType: "string",
              name: "baseImageURI",
              type: "string"
            }
          ],
          internalType: "struct NFTCollectibleFactory.NFTCollectibleInfo[]",
          name: "",
          type: "tuple[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "contract NFTCollectible",
          name: "",
          type: "address"
        }
      ],
      name: "nftAddr2InfoMap",
      outputs: [
        {
          internalType: "contract NFTCollectible",
          name: "nftAddr",
          type: "address"
        },
        {
          internalType: "string",
          name: "name",
          type: "string"
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string"
        },
        {
          internalType: "string",
          name: "baseImageURI",
          type: "string"
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
          internalType: "contract NFTCollectible",
          name: "_collectionAddress",
          type: "address"
        },
        {
          internalType: "string",
          name: "_baseTokenURI",
          type: "string"
        }
      ],
      name: "setBaseURI",
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
