import { Artifact } from "../../../types/artifact";

export const createxArtifact: Artifact = {
  contractName: "CreateX",
  sourceName: "CreateX.sol:CreateX",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "emitter",
          type: "address",
        },
      ],
      name: "FailedContractCreation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "emitter",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "revertData",
          type: "bytes",
        },
      ],
      name: "FailedContractInitialisation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "emitter",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "revertData",
          type: "bytes",
        },
      ],
      name: "FailedEtherTransfer",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "emitter",
          type: "address",
        },
      ],
      name: "InvalidNonceValue",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "emitter",
          type: "address",
        },
      ],
      name: "InvalidSalt",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newContract",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "ContractCreation",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      name: "ContractCreation",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newContract",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "Create3ProxyContractCreation",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "initCodeHash",
          type: "bytes32",
        },
      ],
      name: "computeCreate2Address",
      outputs: [
        {
          internalType: "address",
          name: "computedAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "initCodeHash",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "deployer",
          type: "address",
        },
      ],
      name: "computeCreate2Address",
      outputs: [
        {
          internalType: "address",
          name: "computedAddress",
          type: "address",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "deployer",
          type: "address",
        },
      ],
      name: "computeCreate3Address",
      outputs: [
        {
          internalType: "address",
          name: "computedAddress",
          type: "address",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "computeCreate3Address",
      outputs: [
        {
          internalType: "address",
          name: "computedAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
      ],
      name: "computeCreateAddress",
      outputs: [
        {
          internalType: "address",
          name: "computedAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "deployer",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
      ],
      name: "computeCreateAddress",
      outputs: [
        {
          internalType: "address",
          name: "computedAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
      ],
      name: "deployCreate",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
      ],
      name: "deployCreate2",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
      ],
      name: "deployCreate2",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "refundAddress",
          type: "address",
        },
      ],
      name: "deployCreate2AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
      ],
      name: "deployCreate2AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "refundAddress",
          type: "address",
        },
      ],
      name: "deployCreate2AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
      ],
      name: "deployCreate2AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "implementation",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "deployCreate2Clone",
      outputs: [
        {
          internalType: "address",
          name: "proxy",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "implementation",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "deployCreate2Clone",
      outputs: [
        {
          internalType: "address",
          name: "proxy",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
      ],
      name: "deployCreate3",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
      ],
      name: "deployCreate3",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
      ],
      name: "deployCreate3AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
      ],
      name: "deployCreate3AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "refundAddress",
          type: "address",
        },
      ],
      name: "deployCreate3AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "refundAddress",
          type: "address",
        },
      ],
      name: "deployCreate3AndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
      ],
      name: "deployCreateAndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "initCode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "constructorAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "initCallAmount",
              type: "uint256",
            },
          ],
          internalType: "struct CreateX.Values",
          name: "values",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "refundAddress",
          type: "address",
        },
      ],
      name: "deployCreateAndInit",
      outputs: [
        {
          internalType: "address",
          name: "newContract",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "implementation",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "deployCreateClone",
      outputs: [
        {
          internalType: "address",
          name: "proxy",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
  ],
  bytecode:
    "0x60a06040523060805234801561001457600080fd5b50608051612d956100d860003960008181610603015281816107050152818161082b015281816108d50152818161127f01528181611375015281816113e00152818161141f015281816114a7015281816115b3015281816117d20152818161183d0152818161187c0152818161190401528181611ac501528181611c7801528181611ce301528181611d2201528181611daa01528181611fe901528181612206015281816122f2015281816123a4015281816123fd01526124d90152612d956000f3fe60806040526004361061018a5760003560e01c806381503da1116100d6578063d323826a1161007f578063e96deee411610059578063e96deee414610395578063f5745aba146103a8578063f9664498146103bb57600080fd5b8063d323826a1461034f578063ddda0acb1461036f578063e437252a1461038257600080fd5b80639c36a286116100b05780639c36a28614610316578063a7db93f214610329578063c3fe107b1461033c57600080fd5b806381503da1146102d0578063890c283b146102e357806398e810771461030357600080fd5b80632f990e3f116101385780636cec2536116101125780636cec25361461027d57806374637a7a1461029d5780637f565360146102bd57600080fd5b80632f990e3f1461023757806331a7c8c81461024a57806342d654fc1461025d57600080fd5b806327fe18221161016957806327fe1822146101f15780632852527a1461020457806328ddd0461461021757600080fd5b8062d84acb1461018f57806326307668146101cb57806326a32fc7146101de575b600080fd5b6101a261019d36600461286c565b6103ce565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6101a26101d93660046128eb565b6103e6565b6101a26101ec366004612932565b610452565b6101a26101ff366004612932565b6104de565b6101a2610212366004612990565b610539565b34801561022357600080fd5b506101a26102323660046129e7565b6106fe565b6101a2610245366004612a00565b61072a565b6101a2610258366004612a00565b6107bb565b34801561026957600080fd5b506101a2610278366004612a75565b6107c9565b34801561028957600080fd5b506101a26102983660046129e7565b610823565b3480156102a957600080fd5b506101a26102b8366004612aa1565b61084f565b6101a26102cb366004612932565b611162565b6101a26102de366004612acb565b6111e8565b3480156102ef57600080fd5b506101a26102fe366004612b03565b611276565b6101a2610311366004612b25565b6112a3565b6101a26103243660046128eb565b611505565b6101a2610337366004612ba0565b6116f1565b6101a261034a366004612a00565b611964565b34801561035b57600080fd5b506101a261036a366004612c30565b6119ed565b6101a261037d366004612ba0565b611a17565b6101a2610390366004612b25565b611e0c565b6101a26103a336600461286c565b611e95565b6101a26103b6366004612b25565b611ea4565b6101a26103c9366004612acb565b611f2d565b60006103dd8585858533611a17565b95945050505050565b6000806103f2846120db565b90508083516020850134f591506104088261232a565b604051819073ffffffffffffffffffffffffffffffffffffffff8416907fb8fda7e00c6b06a2b54e58521bc5894fee35f1090e5a3bb6390bfe2b98b497f790600090a35092915050565b60006104d86104d260408051437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b836103e6565b92915050565b600081516020830134f090506104f38161232a565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51190600090a2919050565b600080610545856120db565b905060008460601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f593505073ffffffffffffffffffffffffffffffffffffffff8316610635576040517fc05cee7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660048201526024015b60405180910390fd5b604051829073ffffffffffffffffffffffffffffffffffffffff8516907fb8fda7e00c6b06a2b54e58521bc5894fee35f1090e5a3bb6390bfe2b98b497f790600090a36000808473ffffffffffffffffffffffffffffffffffffffff1634876040516106a19190612c80565b60006040518083038185875af1925050503d80600081146106de576040519150601f19603f3d011682016040523d82523d6000602084013e6106e3565b606091505b50915091506106f38282896123d4565b505050509392505050565b60006104d87f00000000000000000000000000000000000000000000000000000000000000008361084f565b60006107b36107aa60408051437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b85858533611a17565b949350505050565b60006107b3848484336112a3565b60006040518260005260ff600b53836020527f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f6040526055600b20601452806040525061d694600052600160345350506017601e20919050565b60006104d8827f00000000000000000000000000000000000000000000000000000000000000006107c9565b600060607f9400000000000000000000000000000000000000000000000000000000000000610887600167ffffffffffffffff612c9c565b67ffffffffffffffff16841115610902576040517f3c55ab3b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b836000036109c7576040517fd60000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f800000000000000000000000000000000000000000000000000000000000000060368201526037015b6040516020818303038152906040529150611152565b607f8411610a60576040517fd60000000000000000000000000000000000000000000000000000000000000060208201527fff0000000000000000000000000000000000000000000000000000000000000080831660218301527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606088901b16602283015260f886901b1660368201526037016109b1565b60ff8411610b1f576040517fd70000000000000000000000000000000000000000000000000000000000000060208201527fff0000000000000000000000000000000000000000000000000000000000000080831660218301527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606088901b1660228301527f8100000000000000000000000000000000000000000000000000000000000000603683015260f886901b1660378201526038016109b1565b61ffff8411610bff576040517fd80000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f820000000000000000000000000000000000000000000000000000000000000060368201527fffff00000000000000000000000000000000000000000000000000000000000060f086901b1660378201526039016109b1565b62ffffff8411610ce0576040517fd90000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f830000000000000000000000000000000000000000000000000000000000000060368201527fffffff000000000000000000000000000000000000000000000000000000000060e886901b166037820152603a016109b1565b63ffffffff8411610dc2576040517fda0000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f840000000000000000000000000000000000000000000000000000000000000060368201527fffffffff0000000000000000000000000000000000000000000000000000000060e086901b166037820152603b016109b1565b64ffffffffff8411610ea5576040517fdb0000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f850000000000000000000000000000000000000000000000000000000000000060368201527fffffffffff00000000000000000000000000000000000000000000000000000060d886901b166037820152603c016109b1565b65ffffffffffff8411610f89576040517fdc0000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f860000000000000000000000000000000000000000000000000000000000000060368201527fffffffffffff000000000000000000000000000000000000000000000000000060d086901b166037820152603d016109b1565b66ffffffffffffff841161106e576040517fdd0000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f870000000000000000000000000000000000000000000000000000000000000060368201527fffffffffffffff0000000000000000000000000000000000000000000000000060c886901b166037820152603e016109b1565b6040517fde0000000000000000000000000000000000000000000000000000000000000060208201527fff00000000000000000000000000000000000000000000000000000000000000821660218201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660228201527f880000000000000000000000000000000000000000000000000000000000000060368201527fffffffffffffffff00000000000000000000000000000000000000000000000060c086901b166037820152603f0160405160208183030381529060405291505b5080516020909101209392505050565b60006104d86111e260408051437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b83611505565b600061126f61126860408051437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b8484610539565b9392505050565b600061126f83837f00000000000000000000000000000000000000000000000000000000000000006119ed565b60008451602086018451f090506112b98161232a565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51190600090a26000808273ffffffffffffffffffffffffffffffffffffffff168560200151876040516113279190612c80565b60006040518083038185875af1925050503d8060008114611364576040519150601f19603f3d011682016040523d82523d6000602084013e611369565b606091505b5091509150816113c9577f0000000000000000000000000000000000000000000000000000000000000000816040517fa57ca23900000000000000000000000000000000000000000000000000000000815260040161062c929190612ceb565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001631156114fb578373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163160405160006040518083038185875af1925050503d8060008114611495576040519150601f19603f3d011682016040523d82523d6000602084013e61149a565b606091505b509092509050816114fb577f0000000000000000000000000000000000000000000000000000000000000000816040517fc2b3f44500000000000000000000000000000000000000000000000000000000815260040161062c929190612ceb565b5050949350505050565b600080611511846120db565b905060006040518060400160405280601081526020017f67363d3d37363d34f03d5260086018f30000000000000000000000000000000081525090506000828251602084016000f5905073ffffffffffffffffffffffffffffffffffffffff81166115e0576040517fc05cee7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b604051839073ffffffffffffffffffffffffffffffffffffffff8316907f2feea65dd4e9f9cbd86b74b7734210c59a1b2981b5b137bd0ee3e208200c906790600090a361162c83610823565b935060008173ffffffffffffffffffffffffffffffffffffffff1634876040516116569190612c80565b60006040518083038185875af1925050503d8060008114611693576040519150601f19603f3d011682016040523d82523d6000602084013e611698565b606091505b505090506116a68186612456565b60405173ffffffffffffffffffffffffffffffffffffffff8616907f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51190600090a25050505092915050565b6000806116fd876120db565b9050808651602088018651f591506117148261232a565b604051819073ffffffffffffffffffffffffffffffffffffffff8416907fb8fda7e00c6b06a2b54e58521bc5894fee35f1090e5a3bb6390bfe2b98b497f790600090a36000808373ffffffffffffffffffffffffffffffffffffffff168660200151886040516117849190612c80565b60006040518083038185875af1925050503d80600081146117c1576040519150601f19603f3d011682016040523d82523d6000602084013e6117c6565b606091505b509150915081611826577f0000000000000000000000000000000000000000000000000000000000000000816040517fa57ca23900000000000000000000000000000000000000000000000000000000815260040161062c929190612ceb565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163115611958578473ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163160405160006040518083038185875af1925050503d80600081146118f2576040519150601f19603f3d011682016040523d82523d6000602084013e6118f7565b606091505b50909250905081611958577f0000000000000000000000000000000000000000000000000000000000000000816040517fc2b3f44500000000000000000000000000000000000000000000000000000000815260040161062c929190612ceb565b50505095945050505050565b60006107b36119e460408051437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b858585336116f1565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b600080611a23876120db565b905060006040518060400160405280601081526020017f67363d3d37363d34f03d5260086018f30000000000000000000000000000000081525090506000828251602084016000f5905073ffffffffffffffffffffffffffffffffffffffff8116611af2576040517fc05cee7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b604051839073ffffffffffffffffffffffffffffffffffffffff8316907f2feea65dd4e9f9cbd86b74b7734210c59a1b2981b5b137bd0ee3e208200c906790600090a3611b3e83610823565b935060008173ffffffffffffffffffffffffffffffffffffffff1687600001518a604051611b6c9190612c80565b60006040518083038185875af1925050503d8060008114611ba9576040519150601f19603f3d011682016040523d82523d6000602084013e611bae565b606091505b50509050611bbc8186612456565b60405173ffffffffffffffffffffffffffffffffffffffff8616907f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51190600090a260608573ffffffffffffffffffffffffffffffffffffffff1688602001518a604051611c299190612c80565b60006040518083038185875af1925050503d8060008114611c66576040519150601f19603f3d011682016040523d82523d6000602084013e611c6b565b606091505b50909250905081611ccc577f0000000000000000000000000000000000000000000000000000000000000000816040517fa57ca23900000000000000000000000000000000000000000000000000000000815260040161062c929190612ceb565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163115611dfe578673ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163160405160006040518083038185875af1925050503d8060008114611d98576040519150601f19603f3d011682016040523d82523d6000602084013e611d9d565b606091505b50909250905081611dfe577f0000000000000000000000000000000000000000000000000000000000000000816040517fc2b3f44500000000000000000000000000000000000000000000000000000000815260040161062c929190612ceb565b505050505095945050505050565b60006103dd611e8c60408051437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b868686866116f1565b60006103dd85858585336116f1565b60006103dd611f2460408051437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b86868686611a17565b6000808360601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f092505073ffffffffffffffffffffffffffffffffffffffff8216612016576040517fc05cee7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b60405173ffffffffffffffffffffffffffffffffffffffff8316907f4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b51190600090a26000808373ffffffffffffffffffffffffffffffffffffffff1634866040516120809190612c80565b60006040518083038185875af1925050503d80600081146120bd576040519150601f19603f3d011682016040523d82523d6000602084013e6120c2565b606091505b50915091506120d28282886123d4565b50505092915050565b60008060006120e98461250a565b9092509050600082600281111561210257612102612d59565b1480156121205750600081600281111561211e5761211e612d59565b145b1561215e5760408051336020820152469181019190915260608101859052608001604051602081830303815290604052805190602001209250612323565b600082600281111561217257612172612d59565b1480156121905750600181600281111561218e5761218e612d59565b145b156121b0576121a9338560009182526020526040902090565b9250612323565b60008260028111156121c4576121c4612d59565b03612233576040517f13b3a2a100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b600182600281111561224757612247612d59565b1480156122655750600081600281111561226357612263612d59565b145b1561227e576121a9468560009182526020526040902090565b600182600281111561229257612292612d59565b1480156122b0575060028160028111156122ae576122ae612d59565b145b1561231f576040517f13b3a2a100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b8392505b5050919050565b73ffffffffffffffffffffffffffffffffffffffff81161580612362575073ffffffffffffffffffffffffffffffffffffffff81163b155b156123d1576040517fc05cee7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b50565b8215806123f6575073ffffffffffffffffffffffffffffffffffffffff81163b155b15612451577f0000000000000000000000000000000000000000000000000000000000000000826040517fa57ca23900000000000000000000000000000000000000000000000000000000815260040161062c929190612ceb565b505050565b811580612477575073ffffffffffffffffffffffffffffffffffffffff8116155b80612497575073ffffffffffffffffffffffffffffffffffffffff81163b155b15612506576040517fc05cee7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016600482015260240161062c565b5050565b600080606083901c3314801561256757508260141a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167f0100000000000000000000000000000000000000000000000000000000000000145b1561257757506000905080915091565b606083901c331480156125b157507fff00000000000000000000000000000000000000000000000000000000000000601484901a60f81b16155b156125c25750600090506001915091565b33606084901c036125d95750600090506002915091565b606083901c15801561263257508260141a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167f0100000000000000000000000000000000000000000000000000000000000000145b156126435750600190506000915091565b606083901c15801561267c57507fff00000000000000000000000000000000000000000000000000000000000000601484901a60f81b16155b1561268c57506001905080915091565b606083901c6126a15750600190506002915091565b8260141a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167f0100000000000000000000000000000000000000000000000000000000000000036126fc5750600290506000915091565b8260141a60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166000036127385750600290506001915091565b506002905080915091565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261278357600080fd5b813567ffffffffffffffff8082111561279e5761279e612743565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156127e4576127e4612743565b816040528381528660208588010111156127fd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006040828403121561282f57600080fd5b6040516040810181811067ffffffffffffffff8211171561285257612852612743565b604052823581526020928301359281019290925250919050565b60008060008060a0858703121561288257600080fd5b84359350602085013567ffffffffffffffff808211156128a157600080fd5b6128ad88838901612772565b945060408701359150808211156128c357600080fd5b506128d087828801612772565b9250506128e0866060870161281d565b905092959194509250565b600080604083850312156128fe57600080fd5b82359150602083013567ffffffffffffffff81111561291c57600080fd5b61292885828601612772565b9150509250929050565b60006020828403121561294457600080fd5b813567ffffffffffffffff81111561295b57600080fd5b6107b384828501612772565b803573ffffffffffffffffffffffffffffffffffffffff8116811461298b57600080fd5b919050565b6000806000606084860312156129a557600080fd5b833592506129b560208501612967565b9150604084013567ffffffffffffffff8111156129d157600080fd5b6129dd86828701612772565b9150509250925092565b6000602082840312156129f957600080fd5b5035919050565b600080600060808486031215612a1557600080fd5b833567ffffffffffffffff80821115612a2d57600080fd5b612a3987838801612772565b94506020860135915080821115612a4f57600080fd5b50612a5c86828701612772565b925050612a6c856040860161281d565b90509250925092565b60008060408385031215612a8857600080fd5b82359150612a9860208401612967565b90509250929050565b60008060408385031215612ab457600080fd5b612abd83612967565b946020939093013593505050565b60008060408385031215612ade57600080fd5b612ae783612967565b9150602083013567ffffffffffffffff81111561291c57600080fd5b60008060408385031215612b1657600080fd5b50508035926020909101359150565b60008060008060a08587031215612b3b57600080fd5b843567ffffffffffffffff80821115612b5357600080fd5b612b5f88838901612772565b95506020870135915080821115612b7557600080fd5b50612b8287828801612772565b935050612b92866040870161281d565b91506128e060808601612967565b600080600080600060c08688031215612bb857600080fd5b85359450602086013567ffffffffffffffff80821115612bd757600080fd5b612be389838a01612772565b95506040880135915080821115612bf957600080fd5b50612c0688828901612772565b935050612c16876060880161281d565b9150612c2460a08701612967565b90509295509295909350565b600080600060608486031215612c4557600080fd5b8335925060208401359150612a6c60408501612967565b60005b83811015612c77578181015183820152602001612c5f565b50506000910152565b60008251612c92818460208701612c5c565b9190910192915050565b67ffffffffffffffff828116828216039080821115612ce4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5092915050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260008251806040840152612d26816060850160208701612c5c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea164736f6c6343000816000a",
  linkReferences: {},
};