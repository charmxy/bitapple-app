export default {
  _format: "hh-sol-artifact-1",
  contractName: "AssetPackageNFTV2",
  sourceName: "contracts/tokenize/AssetPackageNFTV2.sol",
  abi: [
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
          internalType: "address",
          name: "_owner",
          type: "address"
        },
        {
          internalType: "string",
          name: "contractURI_",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "_cap",
          type: "uint256"
        },
        {
          components: [
            {
              internalType: "address",
              name: "tokenAddr",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "min",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "rate",
              type: "uint256"
            }
          ],
          internalType: "struct FTRateInfo[]",
          name: "_ftRateInfos",
          type: "tuple[]"
        },
        {
          internalType: "address[]",
          name: "_ftAddrs",
          type: "address[]"
        },
        {
          internalType: "address[]",
          name: "blacklist_",
          type: "address[]"
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "startDate_",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "endDate_",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "wrapFee_",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "unwrapFee_",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "mintCountLimit_",
              type: "uint256"
            },
            {
              internalType: "bool",
              name: "rewardImmediately_",
              type: "bool"
            }
          ],
          internalType: "struct Params",
          name: "params",
          type: "tuple"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "ApprovalForAll",
      type: "event"
    },
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
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "RedemptionAssetPackage",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "uri",
          type: "string"
        }
      ],
      name: "SetContractURI",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "string",
          name: "uri",
          type: "string"
        }
      ],
      name: "SetTokenURI",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "stakeId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "string",
          name: "stakeCategory",
          type: "string"
        }
      ],
      name: "Stake",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "UnStake",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          components: [
            {
              internalType: "address",
              name: "erc20Addr",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          indexed: false,
          internalType: "struct AssetPackageNFTV2.ERC20AssetInfo[]",
          name: "assetPackage",
          type: "tuple[]"
        }
      ],
      name: "WrapAssetPackage",
      type: "event"
    },
    {
      inputs: [],
      name: "_contractURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "_endDate",
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
      name: "_ftRateInfoMap",
      outputs: [
        {
          internalType: "address",
          name: "tokenAddr",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "min",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "rate",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "_mintCountLimit",
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
      name: "_rewardImmediately",
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
      inputs: [],
      name: "_startDate",
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
      name: "_unwrapFee",
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
      name: "_wrapFee",
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
          name: "_adminAddr",
          type: "address"
        }
      ],
      name: "addAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_ftAddr",
          type: "address"
        }
      ],
      name: "addFt",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "balanceOf",
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
          internalType: "uint256[]",
          name: "_tokenIds",
          type: "uint256[]"
        }
      ],
      name: "batchUnStake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "cap",
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
      name: "contractURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
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
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "erc20AssetPackages",
      outputs: [
        {
          internalType: "address",
          name: "erc20Addr",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
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
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "getApproved",
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
          name: "owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "operator",
          type: "address"
        }
      ],
      name: "isApprovedForAll",
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
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
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
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "ownerOf",
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
          name: "_opsAddr",
          type: "address"
        }
      ],
      name: "removeAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_ftAddr",
          type: "address"
        }
      ],
      name: "removeFt",
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
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        }
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "contractURI_",
          type: "string"
        }
      ],
      name: "setContractURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_stakeId",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "_stakeCategory",
          type: "string"
        }
      ],
      name: "stake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4"
        }
      ],
      name: "supportsInterface",
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
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256"
        }
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
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
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "transferFrom",
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
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "receiver",
          type: "address"
        }
      ],
      name: "unStake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
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
          components: [
            {
              internalType: "address",
              name: "erc20Addr",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          internalType: "struct AssetPackageNFTV2.ERC20AssetInfo[]",
          name: "_assetInfos",
          type: "tuple[]"
        },
        {
          internalType: "string",
          name: "_uri",
          type: "string"
        }
      ],
      name: "wrap",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "payable",
      type: "function"
    }
  ],
  bytecode:
    "0x60a060405234620008b75762003e4c803803806200001d8162000935565b9283398181810103906101c08212620008b75782516001600160401b038111620008b757620000529082850190850162000980565b60208401516001600160401b038111620008b757620000779083860190860162000980565b906200008660408601620009d7565b60608601519092906001600160401b038111620008b757620000ae9085880190880162000980565b9460808701519660a081015160018060401b038111620008b757810193868201601f86011215620008b757845194620000f1620000eb87620009ec565b62000935565b95602087828152019189850160206060840283010111620008b7579160208301925b6020606084028201018410620008bc575050505060c08201516001600160401b038111620008b7576200014c9088840190840162000a04565b60e083015190976001600160401b038211620008b75760c0916200017591850190850162000a04565b9360ff190112620008b757604051916001600160401b0360c0840190811190841117620006f0576101a09060c084016040526101008101518452610120810151602085015261014081015160408501526101608101516060850152610180810151608085015201518015158103620008b75760a08301526040519860208a016001600160401b0381118b821017620006f05760405260008a5281516001600160401b038111620006f0576200022c60005462000ae3565b601f811162000863575b50806020601f8211600114620007ec57600091620007e0575b508160011b916000199060031b1c1916176000555b84516001600160401b038111620006f0576200028260015462000ae3565b601f81116200078b575b50806020601f8211600114620007125760009162000706575b508160011b916000199060031b1c1916176001555b620002c53362000b20565b620002d03362000b69565b5060005b8a5181101562000310576200030a90620003036001600160a01b03620002fb838f62000a91565b511662000b69565b5062000a6b565b620002d4565b508860005b89518110156200034a576200034490620003036001600160a01b036200033c838e62000a91565b511662000c09565b62000315565b506080829052805188906001600160401b038111620006f05762000370600c5462000ae3565b601f81116200069b575b50806020601f8211600114620006225760009162000616575b508160011b916000199060031b1c191617600c555b604051602081526000600c54620003bf8162000ae3565b90816020850152600181169081600014620005f35750600114620005ab575b50816200041193927f5ca9f750836b0b7efdace104f07b5c9f0df0650c0fd24f5163e99044ae36ea52920390a162000b20565b60005b875181101562000488578080600260406200043462000482958d62000a91565b516001600160a01b039384906200044c908f62000a91565b5151166000526017602052816000209381511660018060a01b031985541617845560208101516001850155015191015562000a6b565b62000414565b50858451600d556020850151600e556040850151600f55606085015160105560005b8651811015620004df57620004d990620003036001600160a01b03620004d1838b62000a91565b511662000c7c565b620004aa565b7fab4556fc64b9308a4af17ca5ddb33467f33f7bc76257b37cfaa0439b7a358d5f6200055b868662000579876200056a8860a08e60808101518015600014620005a25750866013555b0151151560ff80196014541691161760145560405196879633885230602089015260c0604089015260c088019062000abc565b90868203606088015262000abc565b90848203608086015262000abc565b9060a08301520390a16040516130fc908162000cf0823960805181818161129901526116b60152f35b60135562000528565b600c6000908152915060008051602062003dec8339815191525b818310620005db575050810160400181620003de565b805460408486010152602090920191600101620005c5565b60ff191660408086019190915291151560051b84019091019150829050620003de565b90508301518a62000393565b600c6000908152925060008051602062003dec833981519152905b601f198316841062000682576001935082601f1981161062000668575b5050811b01600c55620003a8565b85015160001960f88460031b161c191690558a806200065a565b858101518255602093840193600190920191016200063d565b600c60005260008051602062003dec833981519152601f830160051c810160208410620006e8575b601f830160051c82018110620006db5750506200037a565b60008155600101620006c3565b5080620006c3565b634e487b7160e01b600052604160045260246000fd5b905086015138620002a5565b60016000908152925060008051602062003e2c833981519152905b601f198316841062000772576001935082601f1981161062000758575b5050811b01600155620002ba565b88015160001960f88460031b161c1916905538806200074a565b888101518255602093840193600190920191016200072d565b600160005260008051602062003e2c833981519152601f830160051c810160208410620007d8575b601f830160051c82018110620007cb5750506200028c565b60008155600101620007b3565b5080620007b3565b9050830151386200024f565b6000808052925060008051602062003e0c833981519152905b601f19831684106200084a576001935082601f1981161062000830575b5050811b0160005562000264565b85015160001960f88460031b161c19169055388062000822565b8581015182556020938401936001909201910162000805565b6000805260008051602062003e0c833981519152601f830160051c810160208410620008af575b601f830160051c82018110620008a257505062000236565b600081556001016200088a565b50806200088a565b600080fd5b6060848c88010312620008b7576040516001600160401b03606082019081119082111762000920576060602080948383809501604052620008fd89620009d7565b815282890151838201526040890151604082015281520195019492505062000113565b60246000634e487b7160e01b81526041600452fd5b6040519190601f01601f191682016001600160401b03811183821017620006f057604052565b60005b8381106200096f5750506000910152565b81810151838201526020016200095e565b81601f82011215620008b75780516001600160401b038111620006f057620009b2601f8201601f191660200162000935565b9281845260208284010111620008b757620009d491602080850191016200095b565b90565b51906001600160a01b0382168203620008b757565b6001600160401b038111620006f05760051b60200190565b9080601f83011215620008b75781519062000a23620000eb83620009ec565b9182938184526020808095019260051b820101928311620008b7578301905b82821062000a51575050505090565b83809162000a5f84620009d7565b81520191019062000a42565b600019811462000a7b5760010190565b634e487b7160e01b600052601160045260246000fd5b805182101562000aa65760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b9060209162000ad7815180928185528580860191016200095b565b601f01601f1916010190565b90600182811c9216801562000b15575b602083101462000aff57565b634e487b7160e01b600052602260045260246000fd5b91607f169162000af3565b600680546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b60008181526008602052604081205462000c04576007546801000000000000000081101562000bf057600181018060075581101562000bdc577fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880182905560075491815260086020526040902055600190565b634e487b7160e01b82526032600452602482fd5b634e487b7160e01b82526041600452602482fd5b905090565b6000818152600a602052604081205462000c04576009546801000000000000000081101562000bf057600181018060095581101562000bdc577f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af01829055600954918152600a6020526040902055600190565b60008181526012602052604081205462000c04576011546801000000000000000081101562000bf057600181018060115581101562000bdc577f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c68018290556011549181526012602052604090205560019056fe6080604052600436101561001257600080fd5b60003560e01c806301619bb11461160d57806301ffc9a71461159f578063021e74551461158157806306fdde03146114de578063081812fc146114c0578063095ea7b3146113465780631785f53c146112fe57806318160ddd146112e057806323b872dd146112bc578063355274ea146112815780633e8b588d146111c657806342842e0e1461118c5780634e2b6d981461104d5780636352211e1461101e57806367c956d3146110005780636c217a0214610ee15780636d51a1a214610e8d5780637048027514610e4457806370a0823114610d99578063715018a614610d3e5780638104c24f14610d2057806384a9e87c14610cfd5780638da5cb5b14610cd6578063938e3d7b14610aea57806395d89b4114610a1f578063a22cb4651461094d578063ac8daba01461092f578063afded650146108e5578063b88d4fde14610885578063c0e72740146102f3578063c39ff55a14610829578063c87b56dd14610754578063c993b46f14610709578063dbfa5863146106eb578063de0e9a3e14610336578063e8a3d485146102f3578063e985e9c51461029c5763f2fde38b146101be57600080fd5b34610297576020366003190112610297576101d76122ba565b6101df6124e4565b6001600160a01b0380911690811561022c57600654826001600160a01b0319821617600655167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608490fd5b600080fd5b34610297576040366003190112610297576102b56122ba565b6102bd6122d0565b906001600160a01b03809116600052600560205260406000209116600052602052602060ff604060002054166040519015158152f35b346102975760003660031901126102975761033260405161031e816103178161240e565b0382612280565b604051918291602083526020830190612309565b0390f35b6020806003193601126102975760043590816000526002908181526001600160a01b0392836040600020541633036106a6578060005260158252604060002054156106615761038581306126f8565b1561061c5761039381612588565b508060006103a082612588565b828252600485528660408320916001600160a01b0319928381541690551690818352600386526040832083198154019055838352868652604083209081541690557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8280a460158252604060002090815461041a816122a2565b926104286040519485612280565b81845260009081528481208585015b87878585106105f15750505050505060005b82518110156105485761045c8184612dd6565b5190846010548015158061053d575b6104f8575b5082519281015160405163a9059cbb60e01b81523360048201526024810191909152928390891681600081604481015b03925af19182156104ec576104ba926104bf575b50612dc7565b610449565b6104de90863d88116104e5575b6104d68183612280565b810190612dea565b50876104b4565b503d6104cc565b6040513d6000823e3d90fd5b60649081039150808211610527578387926104a09261051d8560009801928351612e67565b0490529350610470565b634e487b7160e01b600052601160045260246000fd5b50606481111561046b565b508383826000526015815260406000209081549160008155826105a0575b60408051338152602081018790527f12a4d6ce66dc5dcffab67624053cc6629f8a1e664678e326ce15118de7ccb31691819081015b0390a1005b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831683036105275760005260002090600190811b8201915b828110156105665760008082558282015583016105d9565b60019260405161060081612250565b8c86541681528486015483820152815201920192019190610437565b60405162461bcd60e51b815260048101839052600f60248201527f4e6f7420617070726f7665204e465400000000000000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260048101839052601160248201527f4e6f74206173736574207061636b6167650000000000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260048101839052600d60248201527f4e6f74204e4654206f776e6572000000000000000000000000000000000000006044820152606490fd5b34610297576000366003190112610297576020600e54604051908152f35b34610297576020366003190112610297576001600160a01b0361072a6122ba565b61073333612d64565b1680600052600a60205260406000205461074957005b61075290612cbb565b005b34610297576020806003193601126102975760043560005260168152604060002090604051918260008254610788816123d4565b938484526001918683821691826000146108075750506001146107c8575b50506107b492500383612280565b610332604051928284938452830190612309565b85925060005281600020906000915b8583106107ef5750506107b4935082010185806107a6565b805483890185015287945086939092019181016107d7565b92509350506107b494915060ff191682840152151560051b82010185806107a6565b34610297576040366003190112610297576024356004356000526015602052604060002090815481101561029757610860916124b2565b508054600190910154604080516001600160a01b039093168352602083019190915290f35b346102975760803660031901126102975761089e6122ba565b6108a66122d0565b6064359167ffffffffffffffff83116102975736602384011215610297576108db61075293369060248160040135910161237f565b916044359161265e565b34610297576020366003190112610297576001600160a01b036109066122ba565b61090f33612d64565b1680600052600a6020526040600020541561092657005b61075290612b7f565b34610297576000366003190112610297576020600d54604051908152f35b34610297576040366003190112610297576109666122ba565b60243590811515809203610297576001600160a01b0316908133146109da57336000526005602052604060002082600052602052604060002060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b60405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606490fd5b346102975760003660031901126102975760405160006001805490610a43826123d4565b80855291818116908115610ac35750600114610a6a575b6103328461031e81860382612280565b600081815292507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b828410610aab57505050810160200161031e82610a5a565b80546020858701810191909152909301928101610a93565b60ff191660208087019190915292151560051b8501909201925061031e9150839050610a5a565b34610297576020806003193601126102975767ffffffffffffffff60043581811161029757610b1d9036906004016123b6565b610b256124e4565b8051918211610cc057610b39600c546123d4565b601f8111610c5c575b508290601f8311600114610bb25791807f5ca9f750836b0b7efdace104f07b5c9f0df0650c0fd24f5163e99044ae36ea52949261059b94600092610ba7575b50508160011b916000199060031b1c191617600c555b604051918183928352820161240e565b015190508580610b81565b90601f19831691600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c79260005b818110610c45575092600192859261059b967f5ca9f750836b0b7efdace104f07b5c9f0df0650c0fd24f5163e99044ae36ea52989610610c2c575b505050811b01600c55610b97565b015160001960f88460031b161c19169055858080610c1e565b929386600181928786015181550195019301610be3565b600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7601f840160051c810191858510610cb6575b601f0160051c01905b818110610caa5750610b42565b60008155600101610c9d565b9091508190610c94565b634e487b7160e01b600052604160045260246000fd5b346102975760003660031901126102975760206001600160a01b0360065416604051908152f35b3461029757600036600319011261029757602060ff601454166040519015158152f35b34610297576000366003190112610297576020601054604051908152f35b3461029757600036600319011261029757610d576124e4565b60006001600160a01b036006546001600160a01b03198116600655167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610297576020366003190112610297576001600160a01b03610dba6122ba565b168015610dd95760005260036020526020604060002054604051908152f35b60405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608490fd5b34610297576020366003190112610297576001600160a01b03610e656122ba565b610e6d6124e4565b1680600052600860205260406000205415610e8457005b61075290612afd565b346102975760203660031901126102975760606001600160a01b0380610eb16122ba565b16600052601760205260406000209081541690600260018201549101549060405192835260208301526040820152f35b3461029757604036600319011261029757600435610efd6122d0565b90610f066124e4565b8060005260196020526001600160a01b03604060002054163303610fbb57303b1561029757604051632142170760e11b81523060048201526001600160a01b039092166024830152604482018190526000828060648101038183305af19081156104ec577f41750de21fefee6a20fa35759739bf062be264de08a6e85edd566af1161e8c0f9261059b92610fac575b506040805191825233602083015290918291820190565b610fb59061226c565b83610f95565b60405162461bcd60e51b815260206004820152601360248201527f4e4654206e6f7420796f75206465706f736974000000000000000000000000006044820152606490fd5b34610297576000366003190112610297576020601354604051908152f35b3461029757602036600319011261029757602061103c600435612588565b6001600160a01b0360405191168152f35b34610297576020806003193601126102975760043567ffffffffffffffff811161029757366023820112156102975780600401359061108b826122a2565b916110996040519384612280565b80835260248484019160051b8301019136831161029757602401905b82821061117d578360005b8151811015610752576110d38183612dd6565b5190303b1561029757604051632142170760e11b815230600482015233602482015260448101929092526000828060648101038183305af19182156104ec576111699261116e575b507f41750de21fefee6a20fa35759739bf062be264de08a6e85edd566af1161e8c0f61116161114a8386612dd6565b516040805191825233602083015290918291820190565b0390a1612dc7565b6110c0565b6111779061226c565b8361111b565b813581529084019084016110b5565b346102975761119a3661232e565b60405191602083019383851067ffffffffffffffff861117610cc057610752946040526000845261265e565b346102975760603660031901126102975760443560043567ffffffffffffffff82116102975761121b7f0db95471936fbd50729cd9927ddfa908658f896aab36ab8da8e5bcf547ad1b2d9236906004016123b6565b9061122e61122982336126f8565b6125ec565b6112398130336127d8565b8060005260196020526040600020336001600160a01b031982541617905561059b60405192839283523360208401526024356040840152608060608401526080830190612309565b346102975760003660031901126102975760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b34610297576107526112cd3661232e565b916112db61122984336126f8565b6127d8565b34610297576000366003190112610297576020600b54604051908152f35b34610297576020366003190112610297576001600160a01b0361131f6122ba565b6113276124e4565b1680600052600860205260406000205461133d57005b61075290612bd1565b346102975760403660031901126102975761135f6122ba565b602435906001600160a01b03808061137685612588565b169216918083146114715780331490811561144c575b50156113e1578260005260046020526040600020826001600160a01b03198254161790556113b983612588565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600080a4005b60405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608490fd5b9050600052600560205260406000203360005260205260ff604060002054168461138c565b60405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608490fd5b3461029757602036600319011261029757602061103c6004356125aa565b3461029757600036600319011261029757604051600080546114ff816123d4565b80845290600190818116908115610ac35750600114611528576103328461031e81860382612280565b600080805292507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b82841061156957505050810160200161031e82610a5a565b80546020858701810191909152909301928101611551565b34610297576000366003190112610297576020600f54604051908152f35b346102975760203660031901126102975760043563ffffffff60e01b8116809103610297576020906380ac58cd60e01b81149081156115fc575b81156115eb575b506040519015158152f35b6301ffc9a760e01b149050826115e0565b635b5e139f60e01b811491506115d9565b60403660031901126102975767ffffffffffffffff600435818111610297573660238201121561029757806004013591611646836122a2565b916116546040519384612280565b83835260208301906024829560061b8201019036821161029757602401915b81831061220b5750505080602435116102975736602360243501121561029757602435600401351161029757366024803560040135813501011161029757600b547f000000000000000000000000000000000000000000000000000000000000000011156121c6578051156121815760005b8151811015611b01576116f88183612dd6565b51906001600160a01b03825116600052600a60205260406000205415611abc57600460208301516001600160a01b0384511660005260176020526001604060002001541060006001600160a01b03855116604051938480926306fdde0360e01b82525afa9081156104ec5761185e7f204d696e206c696d6974206973200000000000000000000000000000000000009261186394600091611aa1575b506117a26020880151612f51565b906001600160a01b0388511660005260176020526117c7600160406000200154612f51565b916040519586927f54686520616d6f756e7420697320746f20736d616c6c2000000000000000000060208501526118088151809260206037880191016122e6565b83016a01020b6b7bab73a1034b9960ad1b603782015282519061183482604295602087850191016122e6565b019182015282519061184f82605095602087850191016122e6565b01036030810185520183612280565b612f25565b602460206001600160a01b03845116604051928380926370a0823160e01b82523360048301525afa9081156104ec57600091611a6f575b506020830151111591600460006001600160a01b03835116604051928380926306fdde0360e01b82525afa9081156104ec57600091611a4c575b50602460206001600160a01b036118ed82860151612f51565b945116604051928380926370a0823160e01b82523360048301525afa9081156104ec57600091611a16575b509361185e611a0c937f2042616c616e63652069732000000000000000000000000000000000000000009361194f611a1198612f51565b916040519586927f496e73756666696369656e7420636f6e7472616374206163636f756e7420626160208501527f6c616e636520000000000000000000000000000000000000000000000000000060408501526a01020b6b7bab73a1034b9960ad1b81516119c6816046946020868a0191016122e6565b8501918201528251906119e282605195602087850191016122e6565b01918201528251906119fd82605d95602087850191016122e6565b0103603d810185520183612280565b612dc7565b6116e5565b9490506020853d602011611a44575b81611a3260209383612280565b8101031261029757935161185e611918565b3d9150611a25565b611a6991503d806000833e611a618183612280565b810190612ec6565b866118d4565b90506020813d602011611a99575b81611a8a60209383612280565b8101031261029757518561189a565b3d9150611a7d565b611ab691503d806000833e611a618183612280565b89611794565b60405162461bcd60e51b815260206004820152601260248201527f696e76616c6964204654206164647265737300000000000000000000000000006044820152606490fd5b50600d5442111561213c57600e544210156120f7573360005260126020526040600020546120b25733600052601860205260406000205460135411156120635760005b8151811015611ceb57611b578183612dd6565b518051602080830180516040516323b872dd60e01b815233600482015230602482015260448101919091529394936001600160a01b0393919290918290606490829060009088165af180156104ec57611ccc575b50600f80548015159081611cc0575b5015611ca15754606490810381811161052757611bd8908351612e67565b048152600b546000526015602052611bf4846040600020612e02565b60ff60145416611c10575b5050611c0b9150612dc7565b611b44565b8382611c37611c689360209560009851168852601786526002604089200154905190612e67565b915160405163a9059cbb60e01b81523360048201526024810193909352919586939190921691839182906044820190565b03925af19182156104ec57611c0b92611c82575b80611bff565b611c9a9060203d6020116104e5576104d68183612280565b5084611c7c565b50600b546000526015602052611cbb846040600020612e02565b611bf4565b60649150111588611bba565b611ce49060203d6020116104e5576104d68183612280565b5086611bab565b5090600b5490331561201f57611d20611d1a8360005260026020526001600160a01b0360406000205416151590565b15612e7a565b611d43611d1a8360005260026020526001600160a01b0360406000205416151590565b3360005260036020526040600020916001928381540190558060005260026020526040600020336001600160a01b03198254161790553360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4600b548060005260166020526040600020611dbb81546123d4565b601f8111611fc8575b506000601f6024356004013511600114611f1d57907fd2d827dddfc9c9a02afc5fc68d3251684b36e213a7999ebd90a861f25df4077e929160009060243560040135611f0e575b5060243560040135861b906000196024356004013560031b1c19161790559392935b6040805191825260208201819052602480356004810135928401839052016060830137600060606024356004013583010152606081601f19601f6024356004013501168101030190a1600b5491604051936060850191338652846020870152606060408701525180925260808501929160005b818110611ee4576020867f3c295112d4502aa72697e0c57272d9a1768d900f8cf684d01d9281a683655f6f8988038aa1611ed981612dc7565b600b55604051908152f35b835180516001600160a01b0316865260209081015181870152604090950194909301928201611ea0565b60248092503501013587611e0b565b90849291601f196024356004013516908260005260206000209160005b818110611fac57507fd2d827dddfc9c9a02afc5fc68d3251684b36e213a7999ebd90a861f25df4077e95506024356004013511611f89575b50508460243560040135811b019055939293611e2d565b602460001960f882356004013560031b161c199181350101351690558680611f72565b6024803584010135845588969093019260209283019201611f3a565b816000526020600020601f602435600401350160051c81019160206024356004013510612015575b601f0160051c019085905b828110612009575050611dc4565b60008155018590611ffb565b9091508190611ff0565b606460405162461bcd60e51b815260206004820152602060248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152fd5b60405162461bcd60e51b815260206004820152602160248201527f6e756d626572206f66207772617073206578636565647320746865206c696d696044820152601d60fa1b6064820152608490fd5b60405162461bcd60e51b815260206004820152601460248201527f6164647265737320696e20626c61636b6c6973740000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601760248201527f656e642064617465203c2063757272656e742074696d650000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601960248201527f73746172742064617465203e2063757272656e742074696d65000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601360248201527f61737365742063616e206e6f7420656d707479000000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601060248201527f43616e6e6f74206d696e74206d6f7265000000000000000000000000000000006044820152606490fd5b604083360312610297576040519061222282612250565b8335906001600160a01b03821682036102975782602092604094528286013583820152815201920191611673565b6040810190811067ffffffffffffffff821117610cc057604052565b67ffffffffffffffff8111610cc057604052565b90601f8019910116810190811067ffffffffffffffff821117610cc057604052565b67ffffffffffffffff8111610cc05760051b60200190565b600435906001600160a01b038216820361029757565b602435906001600160a01b038216820361029757565b60005b8381106122f95750506000910152565b81810151838201526020016122e9565b90602091612322815180928185528580860191016122e6565b601f01601f1916010190565b6060906003190112610297576001600160a01b0390600435828116810361029757916024359081168103610297579060443590565b67ffffffffffffffff8111610cc057601f01601f191660200190565b92919261238b82612363565b916123996040519384612280565b829481845281830111610297578281602093846000960137010152565b9080601f83011215610297578160206123d19335910161237f565b90565b90600182811c92168015612404575b60208310146123ee57565b634e487b7160e01b600052602260045260246000fd5b91607f16916123e3565b600c546000929161241e826123d4565b80825291600190818116908115612495575060011461243c57505050565b91929350600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7916000925b84841061247d57505060209250010190565b8054602085850181019190915290930192810161246b565b915050602093945060ff929192191683830152151560051b010190565b80548210156124ce5760005260206000209060011b0190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b036006541633036124f857565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b1561254357565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b60005260026020526001600160a01b03604060002054166123d181151561253c565b6125d26125cd8260005260026020526001600160a01b0360406000205416151590565b61253c565b60005260046020526001600160a01b036040600020541690565b156125f357565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608490fd5b9061268293929161267261122984336126f8565b61267d8383836127d8565b6128e7565b1561268957565b60405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608490fd5b0390fd5b906001600160a01b03808061270c84612588565b1693169183831493841561273f575b508315612729575b50505090565b612735919293506125aa565b1614388080612723565b909350600052600560205260406000208260005260205260ff60406000205416923861271b565b1561276d57565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608490fd5b90612800916127e684612588565b916001600160a01b03938493848094169485911614612766565b16918215612896578161281d9161281686612588565b1614612766565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60008481526004602052604081206001600160a01b03199081815416905583825260036020526040822060001981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9293600093909291803b15612a84579484916129429660405180948193630a85bd0160e11b978884523360048501526001600160a01b0380921660248501526044840152608060648401528260209b8c976084830190612309565b0393165af1849181612a28575b506129ff575050503d6000146129f7573d61296981612363565b906129776040519283612280565b81528091833d92013e5b805191826129f45760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608490fd5b01fd5b506060612981565b7fffffffff00000000000000000000000000000000000000000000000000000000161492509050565b9091508581813d8311612a7d575b612a408183612280565b81010312612a7957517fffffffff0000000000000000000000000000000000000000000000000000000081168103612a7957903861294f565b8480fd5b503d612a36565b505050915050600190565b6007548110156124ce5760076000527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880190600090565b6009548110156124ce5760096000527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0190600090565b600081815260086020526040812054612b7a5760075468010000000000000000811015612b66579082612b52612b3b84600160409601600755612a8f565b819391549060031b91821b91600019901b19161790565b905560075492815260086020522055600190565b634e487b7160e01b82526041600452602482fd5b905090565b6000818152600a6020526040812054612b7a5760095468010000000000000000811015612b66579082612bbd612b3b84600160409601600955612ac6565b9055600954928152600a6020522055600190565b6000818152600860205260408120549091908015612cb65760001990808201818111612ca25760075490838201918211612c8e57808203612c5a575b5050506007548015612c4657810190612c2582612a8f565b909182549160031b1b19169055600755815260086020526040812055600190565b634e487b7160e01b84526031600452602484fd5b612c78612c69612b3b93612a8f565b90549060031b1c928392612a8f565b9055845260086020526040842055388080612c0d565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b85526011600452602485fd5b505090565b6000818152600a60205260408120549091908015612cb65760001990808201818111612ca25760095490838201918211612c8e57808203612d30575b5050506009548015612c4657810190612d0f82612ac6565b909182549160031b1b191690556009558152600a6020526040812055600190565b612d4e612d3f612b3b93612ac6565b90549060031b1c928392612ac6565b90558452600a6020526040842055388080612cf7565b6001600160a01b0316600052600860205260406000205415612d8257565b60405162461bcd60e51b815260206004820152600e60248201527f72657175697265642061646d696e0000000000000000000000000000000000006044820152606490fd5b60001981146105275760010190565b80518210156124ce5760209160051b010190565b90816020910312610297575180151581036102975790565b805468010000000000000000811015610cc057612e24916001820181556124b2565b919091612e51576020816001600160a01b0360019351166001600160a01b03198554161784550151910155565b634e487b7160e01b600052600060045260246000fd5b8181029291811591840414171561052757565b15612e8157565b60405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606490fd5b6020818303126102975780519067ffffffffffffffff8211610297570181601f82011215610297578051612ef981612363565b92612f076040519485612280565b81845260208284010111610297576123d191602080850191016122e6565b15612f2d5750565b60405162461bcd60e51b8152602060048201529081906126f4906024830190612309565b806000917a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000808210156130b8575b506d04ee2d6d415b85acef8100000000808310156130a9575b50662386f26fc100008083101561309a575b506305f5e1008083101561308b575b506127108083101561307c575b50606482101561306c575b600a80921015613062575b60019081602181860195612fea87612363565b96612ff86040519889612280565b808852613007601f1991612363565b01366020890137860101905b61301f575b5050505090565b600019019083907f30313233343536373839616263646566000000000000000000000000000000008282061a83530491821561305d57919082613013565b613018565b9160010191612fd7565b9190606460029104910191612fcc565b60049193920491019138612fc1565b60089193920491019138612fb4565b60109193920491019138612fa5565b60209193920491019138612f93565b604093508104915038612f7a56fea26469706673582212203f950abf9d2bd0a6ed646b7cd620b853d9820ddb7b6a6f0b8aa62fa67fb692f864736f6c63430008130033df6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6",
  deployedBytecode:
    "0x6080604052600436101561001257600080fd5b60003560e01c806301619bb11461160d57806301ffc9a71461159f578063021e74551461158157806306fdde03146114de578063081812fc146114c0578063095ea7b3146113465780631785f53c146112fe57806318160ddd146112e057806323b872dd146112bc578063355274ea146112815780633e8b588d146111c657806342842e0e1461118c5780634e2b6d981461104d5780636352211e1461101e57806367c956d3146110005780636c217a0214610ee15780636d51a1a214610e8d5780637048027514610e4457806370a0823114610d99578063715018a614610d3e5780638104c24f14610d2057806384a9e87c14610cfd5780638da5cb5b14610cd6578063938e3d7b14610aea57806395d89b4114610a1f578063a22cb4651461094d578063ac8daba01461092f578063afded650146108e5578063b88d4fde14610885578063c0e72740146102f3578063c39ff55a14610829578063c87b56dd14610754578063c993b46f14610709578063dbfa5863146106eb578063de0e9a3e14610336578063e8a3d485146102f3578063e985e9c51461029c5763f2fde38b146101be57600080fd5b34610297576020366003190112610297576101d76122ba565b6101df6124e4565b6001600160a01b0380911690811561022c57600654826001600160a01b0319821617600655167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608490fd5b600080fd5b34610297576040366003190112610297576102b56122ba565b6102bd6122d0565b906001600160a01b03809116600052600560205260406000209116600052602052602060ff604060002054166040519015158152f35b346102975760003660031901126102975761033260405161031e816103178161240e565b0382612280565b604051918291602083526020830190612309565b0390f35b6020806003193601126102975760043590816000526002908181526001600160a01b0392836040600020541633036106a6578060005260158252604060002054156106615761038581306126f8565b1561061c5761039381612588565b508060006103a082612588565b828252600485528660408320916001600160a01b0319928381541690551690818352600386526040832083198154019055838352868652604083209081541690557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8280a460158252604060002090815461041a816122a2565b926104286040519485612280565b81845260009081528481208585015b87878585106105f15750505050505060005b82518110156105485761045c8184612dd6565b5190846010548015158061053d575b6104f8575b5082519281015160405163a9059cbb60e01b81523360048201526024810191909152928390891681600081604481015b03925af19182156104ec576104ba926104bf575b50612dc7565b610449565b6104de90863d88116104e5575b6104d68183612280565b810190612dea565b50876104b4565b503d6104cc565b6040513d6000823e3d90fd5b60649081039150808211610527578387926104a09261051d8560009801928351612e67565b0490529350610470565b634e487b7160e01b600052601160045260246000fd5b50606481111561046b565b508383826000526015815260406000209081549160008155826105a0575b60408051338152602081018790527f12a4d6ce66dc5dcffab67624053cc6629f8a1e664678e326ce15118de7ccb31691819081015b0390a1005b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831683036105275760005260002090600190811b8201915b828110156105665760008082558282015583016105d9565b60019260405161060081612250565b8c86541681528486015483820152815201920192019190610437565b60405162461bcd60e51b815260048101839052600f60248201527f4e6f7420617070726f7665204e465400000000000000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260048101839052601160248201527f4e6f74206173736574207061636b6167650000000000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260048101839052600d60248201527f4e6f74204e4654206f776e6572000000000000000000000000000000000000006044820152606490fd5b34610297576000366003190112610297576020600e54604051908152f35b34610297576020366003190112610297576001600160a01b0361072a6122ba565b61073333612d64565b1680600052600a60205260406000205461074957005b61075290612cbb565b005b34610297576020806003193601126102975760043560005260168152604060002090604051918260008254610788816123d4565b938484526001918683821691826000146108075750506001146107c8575b50506107b492500383612280565b610332604051928284938452830190612309565b85925060005281600020906000915b8583106107ef5750506107b4935082010185806107a6565b805483890185015287945086939092019181016107d7565b92509350506107b494915060ff191682840152151560051b82010185806107a6565b34610297576040366003190112610297576024356004356000526015602052604060002090815481101561029757610860916124b2565b508054600190910154604080516001600160a01b039093168352602083019190915290f35b346102975760803660031901126102975761089e6122ba565b6108a66122d0565b6064359167ffffffffffffffff83116102975736602384011215610297576108db61075293369060248160040135910161237f565b916044359161265e565b34610297576020366003190112610297576001600160a01b036109066122ba565b61090f33612d64565b1680600052600a6020526040600020541561092657005b61075290612b7f565b34610297576000366003190112610297576020600d54604051908152f35b34610297576040366003190112610297576109666122ba565b60243590811515809203610297576001600160a01b0316908133146109da57336000526005602052604060002082600052602052604060002060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b60405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606490fd5b346102975760003660031901126102975760405160006001805490610a43826123d4565b80855291818116908115610ac35750600114610a6a575b6103328461031e81860382612280565b600081815292507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b828410610aab57505050810160200161031e82610a5a565b80546020858701810191909152909301928101610a93565b60ff191660208087019190915292151560051b8501909201925061031e9150839050610a5a565b34610297576020806003193601126102975767ffffffffffffffff60043581811161029757610b1d9036906004016123b6565b610b256124e4565b8051918211610cc057610b39600c546123d4565b601f8111610c5c575b508290601f8311600114610bb25791807f5ca9f750836b0b7efdace104f07b5c9f0df0650c0fd24f5163e99044ae36ea52949261059b94600092610ba7575b50508160011b916000199060031b1c191617600c555b604051918183928352820161240e565b015190508580610b81565b90601f19831691600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c79260005b818110610c45575092600192859261059b967f5ca9f750836b0b7efdace104f07b5c9f0df0650c0fd24f5163e99044ae36ea52989610610c2c575b505050811b01600c55610b97565b015160001960f88460031b161c19169055858080610c1e565b929386600181928786015181550195019301610be3565b600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7601f840160051c810191858510610cb6575b601f0160051c01905b818110610caa5750610b42565b60008155600101610c9d565b9091508190610c94565b634e487b7160e01b600052604160045260246000fd5b346102975760003660031901126102975760206001600160a01b0360065416604051908152f35b3461029757600036600319011261029757602060ff601454166040519015158152f35b34610297576000366003190112610297576020601054604051908152f35b3461029757600036600319011261029757610d576124e4565b60006001600160a01b036006546001600160a01b03198116600655167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610297576020366003190112610297576001600160a01b03610dba6122ba565b168015610dd95760005260036020526020604060002054604051908152f35b60405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608490fd5b34610297576020366003190112610297576001600160a01b03610e656122ba565b610e6d6124e4565b1680600052600860205260406000205415610e8457005b61075290612afd565b346102975760203660031901126102975760606001600160a01b0380610eb16122ba565b16600052601760205260406000209081541690600260018201549101549060405192835260208301526040820152f35b3461029757604036600319011261029757600435610efd6122d0565b90610f066124e4565b8060005260196020526001600160a01b03604060002054163303610fbb57303b1561029757604051632142170760e11b81523060048201526001600160a01b039092166024830152604482018190526000828060648101038183305af19081156104ec577f41750de21fefee6a20fa35759739bf062be264de08a6e85edd566af1161e8c0f9261059b92610fac575b506040805191825233602083015290918291820190565b610fb59061226c565b83610f95565b60405162461bcd60e51b815260206004820152601360248201527f4e4654206e6f7420796f75206465706f736974000000000000000000000000006044820152606490fd5b34610297576000366003190112610297576020601354604051908152f35b3461029757602036600319011261029757602061103c600435612588565b6001600160a01b0360405191168152f35b34610297576020806003193601126102975760043567ffffffffffffffff811161029757366023820112156102975780600401359061108b826122a2565b916110996040519384612280565b80835260248484019160051b8301019136831161029757602401905b82821061117d578360005b8151811015610752576110d38183612dd6565b5190303b1561029757604051632142170760e11b815230600482015233602482015260448101929092526000828060648101038183305af19182156104ec576111699261116e575b507f41750de21fefee6a20fa35759739bf062be264de08a6e85edd566af1161e8c0f61116161114a8386612dd6565b516040805191825233602083015290918291820190565b0390a1612dc7565b6110c0565b6111779061226c565b8361111b565b813581529084019084016110b5565b346102975761119a3661232e565b60405191602083019383851067ffffffffffffffff861117610cc057610752946040526000845261265e565b346102975760603660031901126102975760443560043567ffffffffffffffff82116102975761121b7f0db95471936fbd50729cd9927ddfa908658f896aab36ab8da8e5bcf547ad1b2d9236906004016123b6565b9061122e61122982336126f8565b6125ec565b6112398130336127d8565b8060005260196020526040600020336001600160a01b031982541617905561059b60405192839283523360208401526024356040840152608060608401526080830190612309565b346102975760003660031901126102975760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b34610297576107526112cd3661232e565b916112db61122984336126f8565b6127d8565b34610297576000366003190112610297576020600b54604051908152f35b34610297576020366003190112610297576001600160a01b0361131f6122ba565b6113276124e4565b1680600052600860205260406000205461133d57005b61075290612bd1565b346102975760403660031901126102975761135f6122ba565b602435906001600160a01b03808061137685612588565b169216918083146114715780331490811561144c575b50156113e1578260005260046020526040600020826001600160a01b03198254161790556113b983612588565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600080a4005b60405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608490fd5b9050600052600560205260406000203360005260205260ff604060002054168461138c565b60405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608490fd5b3461029757602036600319011261029757602061103c6004356125aa565b3461029757600036600319011261029757604051600080546114ff816123d4565b80845290600190818116908115610ac35750600114611528576103328461031e81860382612280565b600080805292507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b82841061156957505050810160200161031e82610a5a565b80546020858701810191909152909301928101611551565b34610297576000366003190112610297576020600f54604051908152f35b346102975760203660031901126102975760043563ffffffff60e01b8116809103610297576020906380ac58cd60e01b81149081156115fc575b81156115eb575b506040519015158152f35b6301ffc9a760e01b149050826115e0565b635b5e139f60e01b811491506115d9565b60403660031901126102975767ffffffffffffffff600435818111610297573660238201121561029757806004013591611646836122a2565b916116546040519384612280565b83835260208301906024829560061b8201019036821161029757602401915b81831061220b5750505080602435116102975736602360243501121561029757602435600401351161029757366024803560040135813501011161029757600b547f000000000000000000000000000000000000000000000000000000000000000011156121c6578051156121815760005b8151811015611b01576116f88183612dd6565b51906001600160a01b03825116600052600a60205260406000205415611abc57600460208301516001600160a01b0384511660005260176020526001604060002001541060006001600160a01b03855116604051938480926306fdde0360e01b82525afa9081156104ec5761185e7f204d696e206c696d6974206973200000000000000000000000000000000000009261186394600091611aa1575b506117a26020880151612f51565b906001600160a01b0388511660005260176020526117c7600160406000200154612f51565b916040519586927f54686520616d6f756e7420697320746f20736d616c6c2000000000000000000060208501526118088151809260206037880191016122e6565b83016a01020b6b7bab73a1034b9960ad1b603782015282519061183482604295602087850191016122e6565b019182015282519061184f82605095602087850191016122e6565b01036030810185520183612280565b612f25565b602460206001600160a01b03845116604051928380926370a0823160e01b82523360048301525afa9081156104ec57600091611a6f575b506020830151111591600460006001600160a01b03835116604051928380926306fdde0360e01b82525afa9081156104ec57600091611a4c575b50602460206001600160a01b036118ed82860151612f51565b945116604051928380926370a0823160e01b82523360048301525afa9081156104ec57600091611a16575b509361185e611a0c937f2042616c616e63652069732000000000000000000000000000000000000000009361194f611a1198612f51565b916040519586927f496e73756666696369656e7420636f6e7472616374206163636f756e7420626160208501527f6c616e636520000000000000000000000000000000000000000000000000000060408501526a01020b6b7bab73a1034b9960ad1b81516119c6816046946020868a0191016122e6565b8501918201528251906119e282605195602087850191016122e6565b01918201528251906119fd82605d95602087850191016122e6565b0103603d810185520183612280565b612dc7565b6116e5565b9490506020853d602011611a44575b81611a3260209383612280565b8101031261029757935161185e611918565b3d9150611a25565b611a6991503d806000833e611a618183612280565b810190612ec6565b866118d4565b90506020813d602011611a99575b81611a8a60209383612280565b8101031261029757518561189a565b3d9150611a7d565b611ab691503d806000833e611a618183612280565b89611794565b60405162461bcd60e51b815260206004820152601260248201527f696e76616c6964204654206164647265737300000000000000000000000000006044820152606490fd5b50600d5442111561213c57600e544210156120f7573360005260126020526040600020546120b25733600052601860205260406000205460135411156120635760005b8151811015611ceb57611b578183612dd6565b518051602080830180516040516323b872dd60e01b815233600482015230602482015260448101919091529394936001600160a01b0393919290918290606490829060009088165af180156104ec57611ccc575b50600f80548015159081611cc0575b5015611ca15754606490810381811161052757611bd8908351612e67565b048152600b546000526015602052611bf4846040600020612e02565b60ff60145416611c10575b5050611c0b9150612dc7565b611b44565b8382611c37611c689360209560009851168852601786526002604089200154905190612e67565b915160405163a9059cbb60e01b81523360048201526024810193909352919586939190921691839182906044820190565b03925af19182156104ec57611c0b92611c82575b80611bff565b611c9a9060203d6020116104e5576104d68183612280565b5084611c7c565b50600b546000526015602052611cbb846040600020612e02565b611bf4565b60649150111588611bba565b611ce49060203d6020116104e5576104d68183612280565b5086611bab565b5090600b5490331561201f57611d20611d1a8360005260026020526001600160a01b0360406000205416151590565b15612e7a565b611d43611d1a8360005260026020526001600160a01b0360406000205416151590565b3360005260036020526040600020916001928381540190558060005260026020526040600020336001600160a01b03198254161790553360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4600b548060005260166020526040600020611dbb81546123d4565b601f8111611fc8575b506000601f6024356004013511600114611f1d57907fd2d827dddfc9c9a02afc5fc68d3251684b36e213a7999ebd90a861f25df4077e929160009060243560040135611f0e575b5060243560040135861b906000196024356004013560031b1c19161790559392935b6040805191825260208201819052602480356004810135928401839052016060830137600060606024356004013583010152606081601f19601f6024356004013501168101030190a1600b5491604051936060850191338652846020870152606060408701525180925260808501929160005b818110611ee4576020867f3c295112d4502aa72697e0c57272d9a1768d900f8cf684d01d9281a683655f6f8988038aa1611ed981612dc7565b600b55604051908152f35b835180516001600160a01b0316865260209081015181870152604090950194909301928201611ea0565b60248092503501013587611e0b565b90849291601f196024356004013516908260005260206000209160005b818110611fac57507fd2d827dddfc9c9a02afc5fc68d3251684b36e213a7999ebd90a861f25df4077e95506024356004013511611f89575b50508460243560040135811b019055939293611e2d565b602460001960f882356004013560031b161c199181350101351690558680611f72565b6024803584010135845588969093019260209283019201611f3a565b816000526020600020601f602435600401350160051c81019160206024356004013510612015575b601f0160051c019085905b828110612009575050611dc4565b60008155018590611ffb565b9091508190611ff0565b606460405162461bcd60e51b815260206004820152602060248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152fd5b60405162461bcd60e51b815260206004820152602160248201527f6e756d626572206f66207772617073206578636565647320746865206c696d696044820152601d60fa1b6064820152608490fd5b60405162461bcd60e51b815260206004820152601460248201527f6164647265737320696e20626c61636b6c6973740000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601760248201527f656e642064617465203c2063757272656e742074696d650000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601960248201527f73746172742064617465203e2063757272656e742074696d65000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601360248201527f61737365742063616e206e6f7420656d707479000000000000000000000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601060248201527f43616e6e6f74206d696e74206d6f7265000000000000000000000000000000006044820152606490fd5b604083360312610297576040519061222282612250565b8335906001600160a01b03821682036102975782602092604094528286013583820152815201920191611673565b6040810190811067ffffffffffffffff821117610cc057604052565b67ffffffffffffffff8111610cc057604052565b90601f8019910116810190811067ffffffffffffffff821117610cc057604052565b67ffffffffffffffff8111610cc05760051b60200190565b600435906001600160a01b038216820361029757565b602435906001600160a01b038216820361029757565b60005b8381106122f95750506000910152565b81810151838201526020016122e9565b90602091612322815180928185528580860191016122e6565b601f01601f1916010190565b6060906003190112610297576001600160a01b0390600435828116810361029757916024359081168103610297579060443590565b67ffffffffffffffff8111610cc057601f01601f191660200190565b92919261238b82612363565b916123996040519384612280565b829481845281830111610297578281602093846000960137010152565b9080601f83011215610297578160206123d19335910161237f565b90565b90600182811c92168015612404575b60208310146123ee57565b634e487b7160e01b600052602260045260246000fd5b91607f16916123e3565b600c546000929161241e826123d4565b80825291600190818116908115612495575060011461243c57505050565b91929350600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7916000925b84841061247d57505060209250010190565b8054602085850181019190915290930192810161246b565b915050602093945060ff929192191683830152151560051b010190565b80548210156124ce5760005260206000209060011b0190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b036006541633036124f857565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b1561254357565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b60005260026020526001600160a01b03604060002054166123d181151561253c565b6125d26125cd8260005260026020526001600160a01b0360406000205416151590565b61253c565b60005260046020526001600160a01b036040600020541690565b156125f357565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608490fd5b9061268293929161267261122984336126f8565b61267d8383836127d8565b6128e7565b1561268957565b60405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608490fd5b0390fd5b906001600160a01b03808061270c84612588565b1693169183831493841561273f575b508315612729575b50505090565b612735919293506125aa565b1614388080612723565b909350600052600560205260406000208260005260205260ff60406000205416923861271b565b1561276d57565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608490fd5b90612800916127e684612588565b916001600160a01b03938493848094169485911614612766565b16918215612896578161281d9161281686612588565b1614612766565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60008481526004602052604081206001600160a01b03199081815416905583825260036020526040822060001981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9293600093909291803b15612a84579484916129429660405180948193630a85bd0160e11b978884523360048501526001600160a01b0380921660248501526044840152608060648401528260209b8c976084830190612309565b0393165af1849181612a28575b506129ff575050503d6000146129f7573d61296981612363565b906129776040519283612280565b81528091833d92013e5b805191826129f45760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608490fd5b01fd5b506060612981565b7fffffffff00000000000000000000000000000000000000000000000000000000161492509050565b9091508581813d8311612a7d575b612a408183612280565b81010312612a7957517fffffffff0000000000000000000000000000000000000000000000000000000081168103612a7957903861294f565b8480fd5b503d612a36565b505050915050600190565b6007548110156124ce5760076000527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880190600090565b6009548110156124ce5760096000527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0190600090565b600081815260086020526040812054612b7a5760075468010000000000000000811015612b66579082612b52612b3b84600160409601600755612a8f565b819391549060031b91821b91600019901b19161790565b905560075492815260086020522055600190565b634e487b7160e01b82526041600452602482fd5b905090565b6000818152600a6020526040812054612b7a5760095468010000000000000000811015612b66579082612bbd612b3b84600160409601600955612ac6565b9055600954928152600a6020522055600190565b6000818152600860205260408120549091908015612cb65760001990808201818111612ca25760075490838201918211612c8e57808203612c5a575b5050506007548015612c4657810190612c2582612a8f565b909182549160031b1b19169055600755815260086020526040812055600190565b634e487b7160e01b84526031600452602484fd5b612c78612c69612b3b93612a8f565b90549060031b1c928392612a8f565b9055845260086020526040842055388080612c0d565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b85526011600452602485fd5b505090565b6000818152600a60205260408120549091908015612cb65760001990808201818111612ca25760095490838201918211612c8e57808203612d30575b5050506009548015612c4657810190612d0f82612ac6565b909182549160031b1b191690556009558152600a6020526040812055600190565b612d4e612d3f612b3b93612ac6565b90549060031b1c928392612ac6565b90558452600a6020526040842055388080612cf7565b6001600160a01b0316600052600860205260406000205415612d8257565b60405162461bcd60e51b815260206004820152600e60248201527f72657175697265642061646d696e0000000000000000000000000000000000006044820152606490fd5b60001981146105275760010190565b80518210156124ce5760209160051b010190565b90816020910312610297575180151581036102975790565b805468010000000000000000811015610cc057612e24916001820181556124b2565b919091612e51576020816001600160a01b0360019351166001600160a01b03198554161784550151910155565b634e487b7160e01b600052600060045260246000fd5b8181029291811591840414171561052757565b15612e8157565b60405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606490fd5b6020818303126102975780519067ffffffffffffffff8211610297570181601f82011215610297578051612ef981612363565b92612f076040519485612280565b81845260208284010111610297576123d191602080850191016122e6565b15612f2d5750565b60405162461bcd60e51b8152602060048201529081906126f4906024830190612309565b806000917a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000808210156130b8575b506d04ee2d6d415b85acef8100000000808310156130a9575b50662386f26fc100008083101561309a575b506305f5e1008083101561308b575b506127108083101561307c575b50606482101561306c575b600a80921015613062575b60019081602181860195612fea87612363565b96612ff86040519889612280565b808852613007601f1991612363565b01366020890137860101905b61301f575b5050505090565b600019019083907f30313233343536373839616263646566000000000000000000000000000000008282061a83530491821561305d57919082613013565b613018565b9160010191612fd7565b9190606460029104910191612fcc565b60049193920491019138612fc1565b60089193920491019138612fb4565b60109193920491019138612fa5565b60209193920491019138612f93565b604093508104915038612f7a56fea26469706673582212203f950abf9d2bd0a6ed646b7cd620b853d9820ddb7b6a6f0b8aa62fa67fb692f864736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {}
};
