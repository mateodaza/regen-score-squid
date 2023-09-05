export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_messenger"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ERC20BridgeFinalized",
        "inputs": [
            {
                "type": "address",
                "name": "localToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "remoteToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ERC20BridgeInitiated",
        "inputs": [
            {
                "type": "address",
                "name": "localToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "remoteToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ERC20DepositInitiated",
        "inputs": [
            {
                "type": "address",
                "name": "l1Token",
                "indexed": true
            },
            {
                "type": "address",
                "name": "l2Token",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ERC20WithdrawalFinalized",
        "inputs": [
            {
                "type": "address",
                "name": "l1Token",
                "indexed": true
            },
            {
                "type": "address",
                "name": "l2Token",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ETHBridgeFinalized",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ETHBridgeInitiated",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ETHDepositInitiated",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ETHWithdrawalFinalized",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "extraData",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "MESSENGER",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "OTHER_BRIDGE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "bridgeERC20",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_localToken"
            },
            {
                "type": "address",
                "name": "_remoteToken"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "bridgeERC20To",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_localToken"
            },
            {
                "type": "address",
                "name": "_remoteToken"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "bridgeETH",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "bridgeETHTo",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "depositERC20",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_l1Token"
            },
            {
                "type": "address",
                "name": "_l2Token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "depositERC20To",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_l1Token"
            },
            {
                "type": "address",
                "name": "_l2Token"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "depositETH",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "depositETHTo",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint32",
                "name": "_minGasLimit"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deposits",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address"
            },
            {
                "type": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "finalizeBridgeERC20",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_localToken"
            },
            {
                "type": "address",
                "name": "_remoteToken"
            },
            {
                "type": "address",
                "name": "_from"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeBridgeETH",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_from"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeERC20Withdrawal",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_l1Token"
            },
            {
                "type": "address",
                "name": "_l2Token"
            },
            {
                "type": "address",
                "name": "_from"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeETHWithdrawal",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_from"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "bytes",
                "name": "_extraData"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "l2TokenBridge",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "messenger",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "version",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
