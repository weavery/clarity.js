/* This is free and unencumbered software released into the public domain. */

import * as crypto from "crypto"
import createKeccakHash from "keccak"

type bool = boolean
type buff = Uint8Array
type expr<T> = () => T
type int = number
type list<E> = Array<E>
type optional<T> = T | typeof none
type principal = string
type err<T> = Err<T>
type response<T, E> = T | err<E>
type trait = string
type tuple = Map<String, any>
type uint = number

interface Seq {
  length: uint
}

function hash(algorithm: string, value: buff | uint | int): buff {
  if (Number.isInteger(value)) {
    let buff = new Uint8Array(16)  // 128 bits
    let view = new DataView(buff.buffer)
    view.setBigUint64(0, BigInt(value as number), true)
    value = buff
  }
  if (value instanceof Uint8Array) {
    let buffer = null
    switch (algorithm) {
      case 'keccak256':
        buffer = createKeccakHash('keccak256').update(Buffer.from(value)).digest()
        break
      default:
        buffer = crypto.createHash(algorithm).update(value).digest()
    }
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength)
  }
  throw new TypeError()
}

const txSenderStack: Array<principal> = []

export var SmartWeave: any = null

export class Panic<T> extends Error {
  public constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, Panic.prototype)
  }
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#clarity-type-system
 */
export class Err<T> extends Error {
  public constructor(public value: T) {
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
 * @link https://docs.blockstack.org/references/language-clarity#-add
 */
export function add(...args: int[] | uint[]): int | uint {
  return args.reduce((sum, operand) => sum + operand, 0)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#--subtract
 */
export function sub(...args: int[] | uint[]): int | uint {
  return args.slice(1).reduce((difference, operand) => difference - operand, args[0])
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#-multiply
 */
export function mul(...args: int[] | uint[]): int | uint {
  return args.reduce((product, operand) => product * operand, 1)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#-divide
 */
export function div(...args: int[] | uint[]): int | uint {
  return Math.trunc(args.slice(1).reduce((quotient, operand) => quotient / operand, args[0]))
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#-less-than
 */
export function lt<T>(a: T, b: T): bool {
  return a < b
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#-less-than-or-equal
 */
export function le<T>(a: T, b: T): bool {
  return a <= b
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#-greater-than
 */
export function gt<T>(a: T, b: T): bool {
  return a > b
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#-greater-than-or-equal
 */
export function ge<T>(a: T, b: T): bool {
  return a >= b
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#append
 */
export function append<T>(list: list<T>, value: T): list<T> {
  return [...list, value]
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#as-contract
 */
export function asContract<A>(expr: expr<A>): A {
  if (SmartWeave) {
    try {
      txSenderStack.unshift(SmartWeave.contract.id)
      return expr()
    }
    finally {
      txSenderStack.shift()
    }
  }
  throw new Error("as-contract not supported")
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#as-max-len
 */
export function asMaxLen<T extends Seq>(value: T, length: uint): optional<T> {
  return value.length <= length ? some(value) : none
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#at-block
 */
export function atBlock<A>(blockHash: buff, expr: expr<A>): A {
  throw new Error("at-block not supported")
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#block-height
 */
export function blockHeight(): uint {
  if (SmartWeave) {
    return SmartWeave!.block.height
  }
  throw new Error("block-height not supported")
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#concat
 */
export function concat<T>(a: list<T> | buff, b: list<T> | buff): list<T> | buff {
  if (a instanceof Array && b instanceof Array) {
    return ([] as list<T>).concat(a, b)
  }
  if (a instanceof Uint8Array && b instanceof Uint8Array) {
    const result = new Uint8Array(a.byteLength + b.byteLength)
    result.set(a, 0)
    result.set(b, a.byteLength)
    return result
  }
  throw new TypeError()
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export function contractCall<A, B>(contractName: trait, functionName: string, ...args: any): response<A, B> {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-caller
 */
export function contractCaller(): principal {
  if (SmartWeave) {
    return txSender()
  }
  throw new Error("contract-caller not supported")
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-of
 */
export function contractOf(contractName: trait): principal {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#default-to
 */
export function defaultTo<T>(defaultValue: T, optionValue: optional<T>): T {
  return optionValue ?? defaultValue
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#err
 */
export function err<T>(value: T) {
  return new Err(value)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#filter
 */
export function filter<A>(func: (a: A) => bool, list: list<A>): list<A> {
  if (list instanceof Array) {
    return list.filter(func)
  }
  throw new TypeError()
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#fold
 */
export function fold<A, B>(func: (a: A, b: B) => B, list: list<A>, initialValue: B): B {
  if (list instanceof Array) {
    return list.reduce((accumulator, currentValue) => func(currentValue, accumulator), initialValue)
  }
  throw new TypeError()
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-get-balance
 */
export function ftGetBalance(tokenName: string, principal: principal): uint {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-mint
 */
export function ftMint(tokenName: string, amount: uint, recipient: principal): response<bool, uint> {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export function ftTransfer(tokenName: string, amount: uint, sender: principal, recipient: principal): response<bool, uint> {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#get
 */
export function get<T>(keyName: string, tuple: tuple | optional<tuple>): T | optional<T> {
  return isNone(tuple) ? none : tuple.get(keyName)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#get-block-info
 */
export function getBlockInfo(propName: string, blockHeight: uint): optional<buff> | optional<uint> {
  throw new Error("get-block-info? not supported")
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#hash160
 */
export function hash160(value: buff | uint | int): buff {
  if (Number.isInteger(value)) {
    let buff = new Uint8Array(16)  // 128 bits
    let view = new DataView(buff.buffer)
    view.setBigUint64(0, BigInt(value as number), true)
    value = buff
  }
  if (value instanceof Uint8Array) {
    const sha256 = crypto.createHash('sha256').update(value).digest()
    const buffer = crypto.createHash('ripemd160').update(sha256).digest()
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength)
  }
  throw new TypeError()
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#is-eq
 */
export function isEq(...values: any[]): bool {
  if (values.length > 0 && values.every((value) => typeof value === typeof values[0])) {
    return values.every((value) => value === values[0])
  }
  throw new TypeError()
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#is-err
 */
export function isErr(value: any): bool {
  return value instanceof Err
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#is-none
 */
export function isNone(value: any): bool {
  return value === none
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#is-ok
 */
export function isOk(value: any): bool {
  return !(value instanceof Err)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#is-some
 */
export function isSome(value: any): bool {
  return value !== none
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#keccak256
 */
export function keccak256(value: buff | uint | int): buff {
  return hash('keccak256', value)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#len
 */
export function len<T>(value: list<T> | buff | string): uint {
  return value.length
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#list
 */
export function list<T>(...values: T[]): T[] {
  if (values.length > 0 && values.some((value) => typeof value !== typeof values[0])) {
    throw new TypeError()
  }
  return values
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#map
 */
export function map<A, B>(func: (a: A) => B, list: list<A>): list<B> {
  if (list instanceof Array) {
    return list.map(func)
  }
  throw new TypeError()
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#map-delete
 */
export function mapDelete(map: Map<tuple, tuple>, key: tuple): bool {
  return map.delete(key)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#map-get
 */
export function mapGet(map: Map<tuple, tuple>, key: tuple): optional<tuple> {
  const value = map.get(key)
  return value ? some(value) : none
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#map-insert
 */
export function mapInsert(map: Map<tuple, tuple>, key: tuple, value: tuple): bool {
  if (map.has(key)) return false
  map.set(key, value)
  return true
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#map-set
 */
export function mapSet(map: Map<tuple, tuple>, key: tuple, value: tuple): bool {
  map.set(key, value)
  return true
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#mod
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
export function mod(a: int | uint, b: int | uint): int | uint {
  if (b === 0) {
    throw new RangeError("division by zero")
  }
  return a % b
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-get-owner
 */
export function nftGetOwner(assetClass: string, assetID: string): optional<principal> {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-mint
 */
export function nftMint(assetClass: string, assetID: string, recipient: principal): response<bool, uint> {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export function nftTransfer(assetClass: string, assetID: string, sender: principal, recipient: principal): response<bool, uint> {
  throw new Error("not implemented yet")  // TODO
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#none
 */
export const none: any = null

/**
 * @link https://docs.blockstack.org/references/language-clarity#not
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 */
export function not(value: bool): bool {
  return !value
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#ok
 */
export function ok<T, E>(value: T): response<T, E> {
  return value
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#pow
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
 */
export function pow(a: int | uint, b: int | uint): int | uint {
  return a ** b  // TODO: handle overflow
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#print
 */
export function print<T>(value: T): T {
  console.log(value)
  return value
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha256
 */
export function sha256(value: buff | uint | int): buff {
  return hash('sha256', value)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512
 */
export function sha512(value: buff | uint | int): buff {
  return hash('sha512', value)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512256
 */
export function sha512_256(value: buff | uint | int): buff {
  return hash('sha512-256', value)
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#some
 */
export function some<T>(value: T): optional<T> {
  return value
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
export function tryUnwrap<A, B>(optionInput: optional<A> | response<A, B>): A | B | null {
  if (isSome(optionInput) || isOk(optionInput)) {
    return optionInput
  }
  if (isErr(optionInput)) {
    return (optionInput as Err<B>).value  // TODO: local exit
  }
  return none  // TODO: local exit
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#tuple
 */
export function tuple(...pairs: Array<any>[]): tuple {
  return pairs.reduce((tuple, [k, v]) => tuple.set(k, v), new Map())
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#tx-sender
 */
export function txSender(): principal {
  if (SmartWeave) {
    if (txSenderStack.length > 0) {
      return txSenderStack[0]  // see asContract()
    }
    return SmartWeave!.transaction.owner
  }
  throw new Error("tx-sender not supported")
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap
 */
export function unwrap<A, B>(optionInput: optional<A> | response<A, B>, thrownValue: A): A {
  if (isNone(optionInput) || isErr(optionInput)) {
    return thrownValue
  }
  return optionInput  // TODO: local exit
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err
 */
export function unwrapErr<A, B>(responseInput: response<A, B>, thrownValue: B): B {
  if (isErr(responseInput)) {
    return (responseInput as Err<B>).value
  }
  return thrownValue  // TODO: local exit
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-err-panic
 */
export function unwrapErrPanic<A, B>(responseInput: response<A, B>): B {
  if (isErr(responseInput)) {
    return (responseInput as Err<B>).value
  }
  throw new Panic("unwrapErrPanic")
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-panic
 */
export function unwrapPanic<A, B>(optionInput: optional<A> | response<A, B>): A {
  if (isNone(optionInput) || isErr(optionInput)) {
    throw new Panic("unwrapPanic")
  }
  return optionInput
}

/**
 * @link https://docs.blockstack.org/references/language-clarity#xor
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
 */
export function xor(a: int | uint, b: int | uint): int | uint {
  return a ^ b
}
