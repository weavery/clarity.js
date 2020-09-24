# Clarity Runtime for JavaScript

[![Project license](https://img.shields.io/badge/license-Public%20Domain-blue.svg)](https://unlicense.org)
[![Discord](https://img.shields.io/discord/755852964513579099?label=discord)](https://discord.gg/vNF5a3M)

## Status

### Mapping of Clarity types

Clarity | Type | TypeScript | JavaScript | Notes
------- | ---- | ---------- | ---------- | -----
[`err`](https://docs.blockstack.org/references/language-clarity#clarity-type-system) | class | `Err<T>` | `Err` |

### Supported Clarity features

Clarity | Type | TypeScript | Status | Notes
------- | ---- | ---------- | ------ | -----
[`append`](https://docs.blockstack.org/references/language-clarity#append) | function | `append()` | ✅ |
[`as-contract`](https://docs.blockstack.org/references/language-clarity#as-contract) | syntax | `asContract<A>()` | 🚧 |
[`at-block`](https://docs.blockstack.org/references/language-clarity#at-block) | syntax | `atBlock<A>()` | 🚧 |
[`block-height`](https://docs.blockstack.org/references/language-clarity#block-height) | keyword | `blockHeight()` | 🚧 |
[`concat`](https://docs.blockstack.org/references/language-clarity#concat) | function | `concat()` | ✅ |
[`contract-call?`](https://docs.blockstack.org/references/language-clarity#contract-call) | function | `contractCall<A, B>()` | 🚧 |
[`contract-caller`](https://docs.blockstack.org/references/language-clarity#contract-caller) | keyword | `contractCaller()` | 🚧 |
[`contract-of`](https://docs.blockstack.org/references/language-clarity#contract-of) | function | `contractOf()` | 🚧 |
[`err`](https://docs.blockstack.org/references/language-clarity#err) | function | `err<T()` | ✅ |
[`filter`](https://docs.blockstack.org/references/language-clarity#filter) | function | `filter<A>()` | 🚧 |
[`fold`](https://docs.blockstack.org/references/language-clarity#fold) | function | `fold<A, B>()`  | 🚧 |
[`ft-get-balance`](https://docs.blockstack.org/references/language-clarity#ft-get-balance) | function | `ftGetBalance()` | 🚧 |
[`ft-mint?`](https://docs.blockstack.org/references/language-clarity#ft-mint) | function | `ftMint()` | 🚧 |
[`ft-transfer?`](https://docs.blockstack.org/references/language-clarity#ft-transfer) | function | `ftTransfer()` | 🚧 |
[`get-block-info?`](https://docs.blockstack.org/references/language-clarity#get-block-info) | function | `getBlockInfo()` | 🚧 |
[`hash160`](https://docs.blockstack.org/references/language-clarity#hash160) | function | `hash160()` | 🚧 |
[`keccak256`](https://docs.blockstack.org/references/language-clarity#keccak256) | function | `keccak256()` | 🚧 |
[`map`](https://docs.blockstack.org/references/language-clarity#map) | function | `map<A, B>()` | 🚧 |
[`nft-get-owner?`](https://docs.blockstack.org/references/language-clarity#nft-get-owner) | function | `nftGetOwner()` | 🚧 |
[`nft-mint?`](https://docs.blockstack.org/references/language-clarity#nft-mint) | function | `nftMint()` | 🚧 |
[`nft-transfer?`](https://docs.blockstack.org/references/language-clarity#nft-transfer) | function | `nftTransfer()` | 🚧 |
[`sha256`](https://docs.blockstack.org/references/language-clarity#sha256) | function | `sha256()` | 🚧 |
[`sha512`](https://docs.blockstack.org/references/language-clarity#sha512) | function | `sha512()` | 🚧 |
[`sha512/256`](https://docs.blockstack.org/references/language-clarity#sha512256) | function | `sha512_256()` | 🚧 |
[`to-int`](https://docs.blockstack.org/references/language-clarity#to-int) | function | `toInt()` | 🚧 |
[`to-uint`](https://docs.blockstack.org/references/language-clarity#to-uint) | function | `toUint()` | 🚧 |
[`try!`](https://docs.blockstack.org/references/language-clarity#try) | function | `tryUnwrap<A, B>()` | 🚧 |
[`tx-sender`](https://docs.blockstack.org/references/language-clarity#tx-sender) | keyword | `txSender()` | 🚧 |
[`unwrap!`](https://docs.blockstack.org/references/language-clarity#unwrap) | function | `unwrap<A, B>()` | 🚧 |
[`unwrap-err!`](https://docs.blockstack.org/references/language-clarity#unwrap-err) | function | `unwrapErr<A, B>()` | 🚧 |
[`unwrap-err-panic`](https://docs.blockstack.org/references/language-clarity#unwrap-err-panic) | function | `unwrapErrPanic<A, B>()` | 🚧 |
[`unwrap-panic`](https://docs.blockstack.org/references/language-clarity#unwrap-panic) | function | `unwrapPanic<A, B>()` | 🚧 |
