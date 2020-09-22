/* This is free and unencumbered software released into the public domain. */
export function requireVersion(version) {
    // TODO: throw an error if the version isn't supported
}
export function requireFeature(feature) {
    // TODO: throw an error if the feature isn't supported
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
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export function contractCall(contractName, functionName, ...args) {
    return null; // TODO
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
 * @link https://docs.blockstack.org/references/language-clarity#ft-get-balance
 */
export function ftGetBalance(tokenName, principal) {
    return 0; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-mint
 */
export function ftMint(tokenName, amount, recipient) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export function ftTransfer(tokenName, amount, sender, recipient) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#get-block-info
 */
export function getBlockInfo(propName, blockHeightExpr) {
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
 * @link https://docs.blockstack.org/references/language-clarity#nft-get-owner
 */
export function nftGetOwner(assetClass, assetID) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-mint
 */
export function nftMint(assetClass, assetID, recipient) {
    return null; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export function nftTransfer(assetClass, assetID, sender, recipient) {
    return null; // TODO
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
 * @link https://docs.blockstack.org/references/language-clarity#tx-sender
 */
export function txSender() {
    return ""; // TODO
}
