/* This is free and unencumbered software released into the public domain. */

type bool = boolean
type buff = ArrayBuffer
type expr<T> = () => T
type int = number
type list<E> = Array<E>
type optional<T> = T | null
type principal = string
type err<T> = Err<T>
type response<T, E> = T | err<E>
type trait = string
type uint = number

/**
 * @link https://docs.blockstack.org/references/language-clarity#clarity-type-system
 */
export class Err<T> extends Error {
  public constructor(value: T) {
    super("")  // TODO
    Object.setPrototypeOf(this, Err.prototype)
  }
}

export function requireVersion(version: string): void {
  // TODO: throw an error if the version isn't supported
}

export function requireFeature(feature: string): void {
  // TODO: throw an error if the feature isn't supported
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#append
 */
export function append<T>(list: list<T>, value: T): list<T> {
  return list  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#as-contract
 */
export function asContract<A>(expr: expr<A>): A {
  return expr()  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#at-block
 */
export function atBlock<A>(blockHash: buff, expr: expr<A>): A {
  return expr()  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#block-height
 */
export function blockHeight(): uint {
  return 0  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#concat
 */
export function concat<T>(a: list<T> | buff, b: list<T> | buff): list<T> | buff {
  return a  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export function contractCall<A, B>(contractName: trait, functionName: string, ...args: any): response<A, B> {
  return err(null)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-caller
 */
export function contractCaller(): principal {
  return ""  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-of
 */
export function contractOf(contractName: trait): principal {
  return ""  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#err
 */
export function err<T>(value: T) {
  return new Err(value)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-get-balance
 */
export function ftGetBalance(tokenName: string, principal: principal): uint {
  return 0  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-mint
 */
export function ftMint(tokenName: string, amount: uint, recipient: principal): response<bool, uint> {
  return err(null)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export function ftTransfer(tokenName: string, amount: uint, sender: principal, recipient: principal): response<bool, uint> {
  return err(null)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#get-block-info
 */
export function getBlockInfo(propName: string, blockHeight: uint): optional<buff> | optional<uint> {
  return null  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#hash160
 */
export function hash160(value: buff | uint | int): buff {
  return new ArrayBuffer(20)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#keccak256
 */
export function keccak256(value: buff | uint | int): buff {
  return new ArrayBuffer(32)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-get-owner
 */
export function nftGetOwner(assetClass: string, assetID: string): optional<principal> {
  return null  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-mint
 */
export function nftMint(assetClass: string, assetID: string, recipient: principal): response<bool, uint> {
  return err(null)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export function nftTransfer(assetClass: string, assetID: string, sender: principal, recipient: principal): response<bool, uint> {
  return err(null)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha256
 */
export function sha256(value: buff | uint | int): buff {
  return new ArrayBuffer(32)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512
 */
export function sha512(value: buff | uint | int): buff {
  return new ArrayBuffer(64)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512256
 */
export function sha512_256(value: buff | uint | int): buff {
  return new ArrayBuffer(32)  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#to-int
 */
export function toInt(value: uint): int {
  return value  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#to-uint
 */
export function toUint(value: int): uint {
  return value  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#try
 */
export function tryUnwrap<A, B>(optionInput: optional<A> | response<A, B>): A {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#tx-sender
 */
export function txSender(): principal {
  return ""  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap
 */
export function unwrap<A, B>(optionInput: optional<A> | response<A, B>, thrownValue: A): A {
  return thrownValue  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err
 */
export function unwrapErr<A, B>(responseInput: response<A, B>, thrownValue: B): B {
  return thrownValue  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err-panic
 */
export function unwrapErrPanic<A, B>(responseInput: response<A, B>): B {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-panic
 */
export function unwrapPanic<A, B>(optionInput: optional<A> | response<A, B>): A {
  throw new Error("not implemented yet")  // TODO
}
