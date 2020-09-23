/* This is free and unencumbered software released into the public domain. */
/**
 * @link https://docs.blockstack.org/references/language-clarity#clarity-type-system
 */
export class Err extends Error {
    constructor(value) {
        super(""); // TODO
        Object.setPrototypeOf(this, Err.prototype);
    }
}
export function requireVersion(version) {
    // TODO: throw an error if the version isn't supported
}
export function requireFeature(feature) {
    // TODO: throw an error if the feature isn't supported
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#append
 */
export function append(list, value) {
    return [...list, value];
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#as-contract
 */
export function asContract(expr) {
    return expr(); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#at-block
 */
export function atBlock(blockHash, expr) {
    return expr(); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#block-height
 */
export function blockHeight() {
    return 0; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#concat
 */
export function concat(a, b) {
    if (a instanceof Array && b instanceof Array) {
        return [].concat(a, b);
    }
    // TODO: buff
    throw new TypeError();
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export function contractCall(contractName, functionName, ...args) {
    return err(null); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-caller
 */
export function contractCaller() {
    return ""; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-of
 */
export function contractOf(contractName) {
    return ""; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#err
 */
export function err(value) {
    return new Err(value);
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#filter
 */
export function filter(func, list) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#fold
 */
export function fold(func, list, initialValue) {
    return initialValue; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-get-balance
 */
export function ftGetBalance(tokenName, principal) {
    return 0; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-mint
 */
export function ftMint(tokenName, amount, recipient) {
    return err(null); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export function ftTransfer(tokenName, amount, sender, recipient) {
    return err(null); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#get-block-info
 */
export function getBlockInfo(propName, blockHeight) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#hash160
 */
export function hash160(value) {
    return new ArrayBuffer(20); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#keccak256
 */
export function keccak256(value) {
    return new ArrayBuffer(32); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#map
 */
export function map(func, list) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-get-owner
 */
export function nftGetOwner(assetClass, assetID) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-mint
 */
export function nftMint(assetClass, assetID, recipient) {
    return err(null); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export function nftTransfer(assetClass, assetID, sender, recipient) {
    return err(null); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha256
 */
export function sha256(value) {
    return new ArrayBuffer(32); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512
 */
export function sha512(value) {
    return new ArrayBuffer(64); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512256
 */
export function sha512_256(value) {
    return new ArrayBuffer(32); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#to-int
 */
export function toInt(value) {
    return value; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#to-uint
 */
export function toUint(value) {
    return value; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#try
 */
export function tryUnwrap(optionInput) {
    throw new Error("not implemented yet"); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#tx-sender
 */
export function txSender() {
    return ""; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap
 */
export function unwrap(optionInput, thrownValue) {
    return thrownValue; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err
 */
export function unwrapErr(responseInput, thrownValue) {
    return thrownValue; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err-panic
 */
export function unwrapErrPanic(responseInput) {
    throw new Error("not implemented yet"); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-panic
 */
export function unwrapPanic(optionInput) {
    throw new Error("not implemented yet"); // TODO
}
