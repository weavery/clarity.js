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

Clarity | TypeScript | JavaScript | Notes
------- | ---------- | ---------- | -----
[`bool`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `boolean` | `boolean` |
[`(buff N)`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `Uint8Array` | `Uint8Array` |
[`err`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `Err<T>` | `Err` |
[`int`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `number` or `bigint` | `number` or `BigInt` |
[`(list N T)`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `Array<T>` | `Array` |
[`(optional T)`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `T` or `null` | `T` or `null` |
[`principal`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `String` | `String` |
[`(response T E)`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `T` or `Err<E>` | `T` or `Err` |
[`(string-ascii N)`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `String` | `String` |
[`(string-utf8 N)`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `String` | `String` |
[`(tuple ...)`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `Map<String, any>` | `Map` |
[`uint`](https://docs.blockstack.org/references/language-types#clarity-type-system) | `number` or `bigint` | `number` or `BigInt` |

### Supported Clarity features

Clarity | Type | TypeScript | Status | Notes
------- | ---- | ---------- | ------ | -----
[`*`](https://docs.blockstack.org/references/language-functions#-multiply) | function | `mul()` | ✅ |
[`+`](https://docs.blockstack.org/references/language-functions#-add) | function | `add()` | ✅ |
[`-`](https://docs.blockstack.org/references/language-functions#--subtract) | function | `sub()` | ✅ |
[`/`](https://docs.blockstack.org/references/language-functions#-divide) | function | `div()` | ✅ |
[`<`](https://docs.blockstack.org/references/language-functions#-less-than) | function | `lt<T>()` | ✅ |
[`<=`](https://docs.blockstack.org/references/language-functions#-less-than-or-equal) | function | `le<T>()` | ✅ |
[`>`](https://docs.blockstack.org/references/language-functions#-greater-than) | function | `gt<T>()` | ✅ |
[`>=`](https://docs.blockstack.org/references/language-functions#-greater-than-or-equal) | function | `ge<T>()` | ✅ |
[`append`](https://docs.blockstack.org/references/language-functions#append) | function | `append()` | ✅ |
[`as-contract`](https://docs.blockstack.org/references/language-functions#as-contract) | syntax | `asContract<A>()` | ⓐ |
[`as-max-len?`](https://docs.blockstack.org/references/language-functions#as-max-len) | syntax | `asMaxLen<T>()` | ✅ |
[`at-block`](https://docs.blockstack.org/references/language-functions#at-block) | syntax | `atBlock<A>()` | ❌ | Not supported by SmartWeave.
[`block-height`](https://docs.blockstack.org/references/language-keywords#block-height) | keyword | `blockHeight()` | ⓐ |
[`concat`](https://docs.blockstack.org/references/language-functions#concat) | function | `concat()` | ✅ |
[`contract-call?`](https://docs.blockstack.org/references/language-functions#contract-call) | function | `contractCall<A, B>()` | ❌ | Not supported by SmartWeave.
[`contract-caller`](https://docs.blockstack.org/references/language-keywords#contract-caller) | keyword | `contractCaller()` | ⓐ |
[`contract-of`](https://docs.blockstack.org/references/language-functions#contract-of) | function | `contractOf()` | ❌ | Not supported by SmartWeave.
[`default-to`](https://docs.blockstack.org/references/language-functions#default-to) | function | `defaultTo<T>()` | ✅ |
[`err`](https://docs.blockstack.org/references/language-functions#err) | function | `err<T()` | ✅ |
[`filter`](https://docs.blockstack.org/references/language-functions#filter) | function | `filter<A>()` | ✅ |
[`fold`](https://docs.blockstack.org/references/language-functions#fold) | function | `fold<A, B>()`  | ✅ |
[`ft-get-balance`](https://docs.blockstack.org/references/language-functions#ft-get-balance) | function | `ftGetBalance()` | 🚧 |
[`ft-mint?`](https://docs.blockstack.org/references/language-functions#ft-mint) | function | `ftMint()` | 🚧 |
[`ft-transfer?`](https://docs.blockstack.org/references/language-functions#ft-transfer) | function | `ftTransfer()` | 🚧 |
[`get`](https://docs.blockstack.org/references/language-functions#get) | function | `get<T>()` | ✅ |
[`get-block-info?`](https://docs.blockstack.org/references/language-functions#get-block-info) | function | `getBlockInfo()` | ❌ | Not supported by SmartWeave.
[`hash160`](https://docs.blockstack.org/references/language-functions#hash160) | function | `hash160()` | ❌ |
[`is-eq`](https://docs.blockstack.org/references/language-functions#is-eq) | function | `isEq()` | ✅ |
[`is-err`](https://docs.blockstack.org/references/language-functions#is-err) | function | `isErr()` | ✅ |
[`is-none`](https://docs.blockstack.org/references/language-functions#is-none) | function | `isNone()` | ✅ |
[`is-ok`](https://docs.blockstack.org/references/language-functions#is-ok) | function | `isOk()` | ✅ |
[`is-some`](https://docs.blockstack.org/references/language-functions#is-some) | function | `isSome()` | ✅ |
[`keccak256`](https://docs.blockstack.org/references/language-functions#keccak256) | function | `keccak256()` | ❌ |
[`len`](https://docs.blockstack.org/references/language-functions#len) | function | `len<T>()` | ✅ |
[`list`](https://docs.blockstack.org/references/language-functions#list) | function | `list<T>()` | ✅ |
[`map`](https://docs.blockstack.org/references/language-functions#map) | function | `map<A, B>()` | ✅ |
[`map-delete`](https://docs.blockstack.org/references/language-functions#map-delete) | function | `mapDelete()` | ✅ |
[`map-get?`](https://docs.blockstack.org/references/language-functions#map-get) | function | `mapGet()` | ✅ |
[`map-insert`](https://docs.blockstack.org/references/language-functions#map-insert) | function | `mapInsert()` | ✅ |
[`map-set`](https://docs.blockstack.org/references/language-functions#map-set) | function | `mapSet()` | ✅ |
[`match`](https://docs.blockstack.org/references/language-functions#match) | syntax | `match<T, E>()` | ✅ |
[`mod`](https://docs.blockstack.org/references/language-functions#mod) | function | `mod()` | ✅ |
[`nft-get-owner?`](https://docs.blockstack.org/references/language-functions#nft-get-owner) | function | `nftGetOwner()` | 🚧 |
[`nft-mint?`](https://docs.blockstack.org/references/language-functions#nft-mint) | function | `nftMint()` | 🚧 |
[`nft-transfer?`](https://docs.blockstack.org/references/language-functions#nft-transfer) | function | `nftTransfer()` | 🚧 |
[`none`](https://docs.blockstack.org/references/language-keywords#none) | constant | `none` | ✅ |
[`not`](https://docs.blockstack.org/references/language-functions#not) | function | `not()` | ✅ |
[`ok`](https://docs.blockstack.org/references/language-functions#ok) | function | `ok<T, E>()` | ✅ |
[`pow`](https://docs.blockstack.org/references/language-functions#pow) | function | `pow()` | ✅ |
[`print`](https://docs.blockstack.org/references/language-functions#print) | function | `print<T>()` | ✅ |
[`sha256`](https://docs.blockstack.org/references/language-functions#sha256) | function | `sha256()` | ❌ |
[`sha512`](https://docs.blockstack.org/references/language-functions#sha512) | function | `sha512()` | ❌ |
[`sha512/256`](https://docs.blockstack.org/references/language-functions#sha512256) | function | `sha512_256()` | ❌ |
[`some`](https://docs.blockstack.org/references/language-functions#some) | function | `some()` | ✅ |
[`to-int`](https://docs.blockstack.org/references/language-functions#to-int) | function | `toInt()` | 🚧 |
[`to-uint`](https://docs.blockstack.org/references/language-functions#to-uint) | function | `toUint()` | 🚧 |
[`try!`](https://docs.blockstack.org/references/language-functions#try) | syntax | `tryUnwrap<A, B>()` | ✅ |
[`tuple`](https://docs.blockstack.org/references/language-functions#tuple) | function | `tuple()` | ✅ |
[`tx-sender`](https://docs.blockstack.org/references/language-keywords#tx-sender) | keyword | `txSender()` | ⓐ |
[`unwrap!`](https://docs.blockstack.org/references/language-functions#unwrap) | syntax | `unwrap<A, B>()` | ✅ |
[`unwrap-err!`](https://docs.blockstack.org/references/language-functions#unwrap-err) | syntax | `unwrapErr<A, B>()` | ✅ |
[`unwrap-err-panic`](https://docs.blockstack.org/references/language-functions#unwrap-err-panic) | function | `unwrapErrPanic<A, B>()` | ✅ |
[`unwrap-panic`](https://docs.blockstack.org/references/language-functions#unwrap-panic) | function | `unwrapPanic<A, B>()` | ✅ |
[`xor`](https://docs.blockstack.org/references/language-functions#xor) | function | `xor()` | ✅ |

**Legend**: ❌ = not supported. 🚧 = work in progress. ✅ = supported. ⓐ = supported on SmartWeave (Arweave).
