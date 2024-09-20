export default {
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "orderId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "seller",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "buyer",
          type: "address"
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
        }
      ],
      name: "BuyOrder",
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
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "orderId",
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
          name: "seller",
          type: "address"
        }
      ],
      name: "PlaceOrder",
      type: "event"
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IERC721",
              name: "nft",
              type: "address"
            },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" }
          ],
          internalType: "struct OrderBook.PlaceOrderData[]",
          name: "_orderData",
          type: "tuple[]"
        }
      ],
      name: "batchPlaceOrder",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "_orderId", type: "uint256" }],
      name: "buyOrder",
      outputs: [],
      stateMutability: "payable",
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
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "orders",
      outputs: [
        { internalType: "address", name: "seller", type: "address" },
        { internalType: "address", name: "buyer", type: "address" },
        { internalType: "contract IERC721", name: "nft", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "uint256", name: "price", type: "uint256" },
        { internalType: "uint256", name: "expiry", type: "uint256" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IERC721",
              name: "nft",
              type: "address"
            },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" }
          ],
          internalType: "struct OrderBook.PlaceOrderData",
          name: "_orderData",
          type: "tuple"
        }
      ],
      name: "placeOrder",
      outputs: [],
      stateMutability: "nonpayable",
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
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};
