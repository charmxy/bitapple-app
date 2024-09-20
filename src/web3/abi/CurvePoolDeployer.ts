export default {
  abi: [
    {
      name: "CryptoPoolDeployed",
      inputs: [
        { name: "token", type: "address", indexed: false },
        { name: "coins", type: "address[2]", indexed: false },
        { name: "A", type: "uint256", indexed: false },
        { name: "gamma", type: "uint256", indexed: false },
        { name: "mid_fee", type: "uint256", indexed: false },
        { name: "out_fee", type: "uint256", indexed: false },
        { name: "allowed_extra_profit", type: "uint256", indexed: false },
        { name: "fee_gamma", type: "uint256", indexed: false },
        { name: "adjustment_step", type: "uint256", indexed: false },
        { name: "admin_fee", type: "uint256", indexed: false },
        { name: "ma_half_time", type: "uint256", indexed: false },
        { name: "initial_price", type: "uint256", indexed: false },
        { name: "deployer", type: "address", indexed: false }
      ],
      anonymous: false,
      type: "event"
    },
    {
      name: "LiquidityGaugeDeployed",
      inputs: [
        { name: "pool", type: "address", indexed: false },
        { name: "token", type: "address", indexed: false },
        { name: "gauge", type: "address", indexed: false }
      ],
      anonymous: false,
      type: "event"
    },
    {
      name: "UpdateFeeReceiver",
      inputs: [
        { name: "_old_fee_receiver", type: "address", indexed: false },
        { name: "_new_fee_receiver", type: "address", indexed: false }
      ],
      anonymous: false,
      type: "event"
    },
    {
      name: "UpdatePoolImplementation",
      inputs: [
        { name: "_old_pool_implementation", type: "address", indexed: false },
        { name: "_new_pool_implementation", type: "address", indexed: false }
      ],
      anonymous: false,
      type: "event"
    },
    {
      name: "UpdateTokenImplementation",
      inputs: [
        { name: "_old_token_implementation", type: "address", indexed: false },
        { name: "_new_token_implementation", type: "address", indexed: false }
      ],
      anonymous: false,
      type: "event"
    },
    {
      name: "UpdateGaugeImplementation",
      inputs: [
        { name: "_old_gauge_implementation", type: "address", indexed: false },
        { name: "_new_gauge_implementation", type: "address", indexed: false }
      ],
      anonymous: false,
      type: "event"
    },
    {
      name: "TransferOwnership",
      inputs: [
        { name: "_old_owner", type: "address", indexed: false },
        { name: "_new_owner", type: "address", indexed: false }
      ],
      anonymous: false,
      type: "event"
    },
    {
      stateMutability: "nonpayable",
      type: "constructor",
      inputs: [
        { name: "_fee_receiver", type: "address" },
        { name: "_pool_implementation", type: "address" },
        { name: "_token_implementation", type: "address" },
        { name: "_gauge_implementation", type: "address" },
        { name: "_weth", type: "address" }
      ],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "deploy_pool",
      inputs: [
        { name: "_name", type: "string" },
        { name: "_symbol", type: "string" },
        { name: "_coins", type: "address[2]" },
        { name: "A", type: "uint256" },
        { name: "gamma", type: "uint256" },
        { name: "mid_fee", type: "uint256" },
        { name: "out_fee", type: "uint256" },
        { name: "allowed_extra_profit", type: "uint256" },
        { name: "fee_gamma", type: "uint256" },
        { name: "adjustment_step", type: "uint256" },
        { name: "admin_fee", type: "uint256" },
        { name: "ma_half_time", type: "uint256" },
        { name: "initial_price", type: "uint256" }
      ],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "deploy_gauge",
      inputs: [{ name: "_pool", type: "address" }],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_fee_receiver",
      inputs: [{ name: "_fee_receiver", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_pool_implementation",
      inputs: [{ name: "_pool_implementation", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_token_implementation",
      inputs: [{ name: "_token_implementation", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "set_gauge_implementation",
      inputs: [{ name: "_gauge_implementation", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "commit_transfer_ownership",
      inputs: [{ name: "_addr", type: "address" }],
      outputs: []
    },
    {
      stateMutability: "nonpayable",
      type: "function",
      name: "accept_transfer_ownership",
      inputs: [],
      outputs: []
    },
    {
      stateMutability: "view",
      type: "function",
      name: "find_pool_for_coins",
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" }
      ],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "find_pool_for_coins",
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "i", type: "uint256" }
      ],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_coins",
      inputs: [{ name: "_pool", type: "address" }],
      outputs: [{ name: "", type: "address[2]" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_decimals",
      inputs: [{ name: "_pool", type: "address" }],
      outputs: [{ name: "", type: "uint256[2]" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_balances",
      inputs: [{ name: "_pool", type: "address" }],
      outputs: [{ name: "", type: "uint256[2]" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_coin_indices",
      inputs: [
        { name: "_pool", type: "address" },
        { name: "_from", type: "address" },
        { name: "_to", type: "address" }
      ],
      outputs: [
        { name: "", type: "uint256" },
        { name: "", type: "uint256" }
      ]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_gauge",
      inputs: [{ name: "_pool", type: "address" }],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_eth_index",
      inputs: [{ name: "_pool", type: "address" }],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "get_token",
      inputs: [{ name: "_pool", type: "address" }],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "future_admin",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "fee_receiver",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "pool_implementation",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "token_implementation",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "gauge_implementation",
      inputs: [],
      outputs: [{ name: "", type: "address" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "pool_count",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }]
    },
    {
      stateMutability: "view",
      type: "function",
      name: "pool_list",
      inputs: [{ name: "arg0", type: "uint256" }],
      outputs: [{ name: "", type: "address" }]
    }
  ]
};
