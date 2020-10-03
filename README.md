# Clarity Runtime for JavaScript

[![Project license](https://img.shields.io/badge/license-Public%20Domain-blue.svg)](https://unlicense.org)
[![Discord](https://img.shields.io/discord/755852964513579099?label=discord)](https://discord.gg/vNF5a3M)

## Acknowledgments

We thank [Arweave] and [Blockstack] for sponsoring the development of this
project as part of the development of [Sworn].

[Arweave]:    https://arweave.org
[Blockstack]: https://blockstack.org
[Sworn]:      https://github.com/weavery/sworn

## Status

### Mapping of Clarity types

Clarity | Type | TypeScript | JavaScript | Notes
------- | ---- | ---------- | ---------- | -----
[`bool`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `boolean` | `boolean` |
[`buff`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `Uint8Array` | `Uint8Array` |
[`err`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `Err<T>` | `Err` |
[`int`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `number` or `bigint` | `number` or `BigInt` |
[`uint`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `number` or `bigint` | `number` or `BigInt` |
[`(list N T)`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `Array<T>` | `Array` |
[`(optional T)`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | - | `T` or `null` | `T` or `null` |
[`(response T E)`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | - | `T` or `Err<E>` | `T` or `Err` |
[`(tuple ...)`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `Map<String, any>` | `Map` |

### Supported Clarity features

Clarity | Type | TypeScript | Status | Notes
------- | ---- | ---------- | ------ | -----
[`*`](https://docs.blockstack.org/references/language-clarity#-multiply) | function | `mul()` | ✅ |
[`+`](https://docs.blockstack.org/references/language-clarity#-add) | function | `add()` | ✅ |
[`-`](https://docs.blockstack.org/references/language-clarity#--subtract) | function | `sub()` | ✅ |
[`/`](https://docs.blockstack.org/references/language-clarity#-divide) | function | `div()` | ✅ |
[`<`](https://docs.blockstack.org/references/language-clarity#-less-than) | function | `lt<T>()` | ✅ |
[`<=`](https://docs.blockstack.org/references/language-clarity#-less-than-or-equal) | function | `le<T>()` | ✅ |
[`>`](https://docs.blockstack.org/references/language-clarity#-greater-than) | function | `gt<T>()` | ✅ |
[`>=`](https://docs.blockstack.org/references/language-clarity#-greater-than-or-equal) | function | `ge<T>()` | ✅ |
[`append`](https://docs.blockstack.org/references/language-clarity#append) | function | `append()` | ✅ |
[`as-contract`](https://docs.blockstack.org/references/language-clarity#as-contract) | syntax | `asContract<A>()` | 🚧 |
[`as-max-len?`](https://docs.blockstack.org/references/language-clarity#as-max-len) | syntax | `asMaxLen<T>()` | ✅ |
[`at-block`](https://docs.blockstack.org/references/language-clarity#at-block) | syntax | `atBlock<A>()` | 🚧 |
[`block-height`](https://docs.blockstack.org/references/language-clarity#block-height) | keyword | `blockHeight()` | ⓐ |
[`concat`](https://docs.blockstack.org/references/language-clarity#concat) | function | `concat()` | ✅ |
[`contract-call?`](https://docs.blockstack.org/references/language-clarity#contract-call) | function | `contractCall<A, B>()` | 🚧 |
[`contract-caller`](https://docs.blockstack.org/references/language-clarity#contract-caller) | keyword | `contractCaller()` | ⓐ |
[`contract-of`](https://docs.blockstack.org/references/language-clarity#contract-of) | function | `contractOf()` | 🚧 |
[`default-to`](https://docs.blockstack.org/references/language-clarity#default-to) | function | `defaultTo<T>()` | ✅ |
[`err`](https://docs.blockstack.org/references/language-clarity#err) | function | `err<T()` | ✅ |
[`filter`](https://docs.blockstack.org/references/language-clarity#filter) | function | `filter<A>()` | ✅ |
[`fold`](https://docs.blockstack.org/references/language-clarity#fold) | function | `fold<A, B>()`  | ✅ |
[`ft-get-balance`](https://docs.blockstack.org/references/language-clarity#ft-get-balance) | function | `ftGetBalance()` | 🚧 |
[`ft-mint?`](https://docs.blockstack.org/references/language-clarity#ft-mint) | function | `ftMint()` | 🚧 |
[`ft-transfer?`](https://docs.blockstack.org/references/language-clarity#ft-transfer) | function | `ftTransfer()` | 🚧 |
[`get`](https://docs.blockstack.org/references/language-clarity#get) | function | `get<T>()` | ✅ |
[`get-block-info?`](https://docs.blockstack.org/references/language-clarity#get-block-info) | function | `getBlockInfo()` | 🚧 |
[`hash160`](https://docs.blockstack.org/references/language-clarity#hash160) | function | `hash160()` | ✅ |
[`is-eq`](https://docs.blockstack.org/references/language-clarity#is-eq) | function | `isEq()` | ✅ |
[`is-err`](https://docs.blockstack.org/references/language-clarity#is-err) | function | `isErr()` | ✅ |
[`is-none`](https://docs.blockstack.org/references/language-clarity#is-none) | function | `isNone()` | ✅ |
[`is-ok`](https://docs.blockstack.org/references/language-clarity#is-ok) | function | `isOk()` | ✅ |
[`is-some`](https://docs.blockstack.org/references/language-clarity#is-some) | function | `isSome()` | ✅ |
[`keccak256`](https://docs.blockstack.org/references/language-clarity#keccak256) | function | `keccak256()` | ✅ |
[`len`](https://docs.blockstack.org/references/language-clarity#len) | function | `len<T>()` | ✅ |
[`list`](https://docs.blockstack.org/references/language-clarity#list) | function | `list<T>()` | ✅ |
[`map`](https://docs.blockstack.org/references/language-clarity#map) | function | `map<A, B>()` | ✅ |
[`map-delete`](https://docs.blockstack.org/references/language-clarity#map-delete) | function | `mapDelete()` | ✅ |
[`map-get?`](https://docs.blockstack.org/references/language-clarity#map-get) | function | `mapGet()` | ✅ |
[`map-insert`](https://docs.blockstack.org/references/language-clarity#map-insert) | function | `mapInsert()` | ✅ |
[`map-set`](https://docs.blockstack.org/references/language-clarity#map-set) | function | `mapSet()` | ✅ |
[`mod`](https://docs.blockstack.org/references/language-clarity#mod) | function | `mod()` | ✅ |
[`nft-get-owner?`](https://docs.blockstack.org/references/language-clarity#nft-get-owner) | function | `nftGetOwner()` | 🚧 |
[`nft-mint?`](https://docs.blockstack.org/references/language-clarity#nft-mint) | function | `nftMint()` | 🚧 |
[`nft-transfer?`](https://docs.blockstack.org/references/language-clarity#nft-transfer) | function | `nftTransfer()` | 🚧 |
[`none`](https://docs.blockstack.org/references/language-clarity#none) | constant | `none` | ✅ |
[`not`](https://docs.blockstack.org/references/language-clarity#not) | function | `not()` | ✅ |
[`ok`](https://docs.blockstack.org/references/language-clarity#ok) | function | `ok<T, E>()` | ✅ |
[`pow`](https://docs.blockstack.org/references/language-clarity#pow) | function | `pow()` | ✅ |
[`print`](https://docs.blockstack.org/references/language-clarity#print) | function | `print<T>()` | ✅ |
[`sha256`](https://docs.blockstack.org/references/language-clarity#sha256) | function | `sha256()` | ✅ |
[`sha512`](https://docs.blockstack.org/references/language-clarity#sha512) | function | `sha512()` | ✅ |
[`sha512/256`](https://docs.blockstack.org/references/language-clarity#sha512256) | function | `sha512_256()` | ✅ |
[`some`](https://docs.blockstack.org/references/language-clarity#some) | function | `some()` | ✅ |
[`to-int`](https://docs.blockstack.org/references/language-clarity#to-int) | function | `toInt()` | 🚧 |
[`to-uint`](https://docs.blockstack.org/references/language-clarity#to-uint) | function | `toUint()` | 🚧 |
[`try!`](https://docs.blockstack.org/references/language-clarity#try) | syntax | `tryUnwrap<A, B>()` | ✅ |
[`tuple`](https://docs.blockstack.org/references/language-clarity#tuple) | function | `tuple()` | ✅ |
[`tx-sender`](https://docs.blockstack.org/references/language-clarity#tx-sender) | keyword | `txSender()` | ⓐ |
[`unwrap!`](https://docs.blockstack.org/references/language-clarity#unwrap) | syntax | `unwrap<A, B>()` | ✅ |
[`unwrap-err!`](https://docs.blockstack.org/references/language-clarity#unwrap-err) | syntax | `unwrapErr<A, B>()` | ✅ |
[`unwrap-err-panic`](https://docs.blockstack.org/references/language-clarity#unwrap-err-panic) | function | `unwrapErrPanic<A, B>()` | ✅ |
[`unwrap-panic`](https://docs.blockstack.org/references/language-clarity#unwrap-panic) | function | `unwrapPanic<A, B>()` | ✅ |
[`xor`](https://docs.blockstack.org/references/language-clarity#xor) | function | `xor()` | ✅ |

**Legend**: 🚧 = work in progress. ✅ = supported. ⓐ = supported on Arweave.
