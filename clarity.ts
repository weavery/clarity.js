/* This is free and unencumbered software released into the public domain. */

type bool = boolean
type buff = ArrayBuffer
type expr<A> = () => A
type int = number
type optional<T> = T | null
type principal = string
type response<T, E> = T | E | null  // TODO
type trait = string
type uint = number

export function requireVersion(version: string): void {
  // TODO: throw an error if the version isn't supported
}

export function requireFeature(feature: string): void {
  // TODO: throw an error if the feature isn't supported
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#as-contract
 */
export function asContract<A>(expr: expr<A>): A {
  return expr(); // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#at-block
 */
export function atBlock<A>(blockHash: buff, expr: expr<A>): A {
  return expr(); // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#block-height
 */
export function blockHeight(): uint {
  return 0; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export function contractCall<A, B>(contractName: trait, functionName: string, ...args: any): response<A, B> {
  return null; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-caller
 */
export function contractCaller(): principal {
  return ""; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-of
 */
export function contractOf(contractName: trait): principal {
  return ""; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-get-balance
 */
export function ftGetBalance(tokenName: string, principal: principal): uint {
  return 0; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-mint
 */
export function ftMint(tokenName: string, amount: uint, recipient: principal): response<bool, uint> {
  return null; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export function ftTransfer(tokenName: string, amount: uint, sender: principal, recipient: principal): response<bool, uint> {
  return null; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#get-block-info
 */
export function getBlockInfo(propName: string, blockHeight: uint): optional<buff> | optional<uint> {
  return null; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#hash160
 */
export function hash160(value: buff | uint | int): buff {
  return new ArrayBuffer(20); // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#keccak256
 */
export function keccak256(value: buff | uint | int): buff {
  return new ArrayBuffer(32); // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-get-owner
 */
export function nftGetOwner(assetClass: string, assetID: string): optional<principal> {
  return null; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-mint
 */
export function nftMint(assetClass: string, assetID: string, recipient: principal): response<bool, uint> {
  return null; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export function nftTransfer(assetClass: string, assetID: string, sender: principal, recipient: principal): response<bool, uint> {
  return null; // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha256
 */
export function sha256(value: buff | uint | int): buff {
  return new ArrayBuffer(32); // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512
 */
export function sha512(value: buff | uint | int): buff {
  return new ArrayBuffer(64); // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512256
 */
export function sha512_256(value: buff | uint | int): buff {
  return new ArrayBuffer(32); // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#tx-sender
 */
export function txSender(): principal {
  return ""; // TODO
}
