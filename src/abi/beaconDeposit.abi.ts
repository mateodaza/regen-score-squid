export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DepositEvent",
        "inputs": [
            {
                "type": "bytes",
                "name": "pubkey",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "withdrawal_credentials",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "signature",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "index",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "deposit",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes",
                "name": "pubkey"
            },
            {
                "type": "bytes",
                "name": "withdrawal_credentials"
            },
            {
                "type": "bytes",
                "name": "signature"
            },
            {
                "type": "bytes32",
                "name": "deposit_data_root"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "get_deposit_count",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes"
            }
        ]
    },
    {
        "type": "function",
        "name": "get_deposit_root",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    }
]
