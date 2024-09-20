export default {
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_vault",
          type: "address"
        },
        {
          internalType: "address",
          name: "_oAdmin",
          type: "address"
        },
        {
          internalType: "address",
          name: "_pAdmin",
          type: "address"
        },
        {
          internalType: "address",
          name: "_eAdmin",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "_unwrapFee",
      outputs: [
        {
          internalType: "bool",
          name: "initialized",
          type: "bool"
        },
        {
          internalType: "uint256",
          name: "value",
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
      name: "_wrapFee",
      outputs: [
        {
          internalType: "bool",
          name: "initialized",
          type: "bool"
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "applyEmergencyAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "applyOwnershipAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "applyParameterAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_wnft",
          type: "address"
        }
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_wnfts",
          type: "address[]"
        }
      ],
      name: "burnMany",
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
      name: "burners",
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
          internalType: "address",
          name: "_e",
          type: "address"
        }
      ],
      name: "commitEmergencyAdmin",
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
      inputs: [
        {
          internalType: "address",
          name: "_p",
          type: "address"
        }
      ],
      name: "commitParameterAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "emergencyAdmin",
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
      name: "futureEmergencyAdmin",
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
      name: "futureParameterAdmin",
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
      inputs: [],
      name: "parameterAdmin",
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
          internalType: "address",
          name: "_wnft",
          type: "address"
        },
        {
          internalType: "address",
          name: "_burner",
          type: "address"
        }
      ],
      name: "setBurner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_wnfts",
          type: "address[]"
        },
        {
          internalType: "address[]",
          name: "_burners",
          type: "address[]"
        }
      ],
      name: "setManyBurners",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "_stopped",
          type: "bool"
        }
      ],
      name: "setStopped",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_wnft",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_fee",
          type: "uint256"
        }
      ],
      name: "setUnwrapFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_wnft",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_fee",
          type: "uint256"
        }
      ],
      name: "setWrapFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "stopped",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_wnft",
          type: "address"
        }
      ],
      name: "unwrapFee",
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
      inputs: [],
      name: "vault",
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
          internalType: "address",
          name: "_wnft",
          type: "address"
        }
      ],
      name: "wrapFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
};
