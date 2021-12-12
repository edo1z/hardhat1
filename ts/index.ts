import { ethers } from 'ethers';
const InputDataDecoder = require('ethereum-input-data-decoder');
const abi = [{}];
const inputData = '0xxxx';
const decoder = new InputDataDecoder(abi);
const result = decoder.decodeData(inputData);

const bn = result.inputs[0];
const bytes32 = new Uint8Array(result.inputs[1]);
const bytes = new Uint8Array(result.inputs[2]);
console.log(bn.toString(10), bytes32, bytes);
const bytes32Hex = Buffer.from(bytes32).toString('hex');
const bytesHex = Buffer.from(bytes).toString('hex');
console.log(bytes32Hex);
console.log(bytesHex);
