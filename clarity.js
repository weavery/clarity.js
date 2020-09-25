/* This is free and unencumbered software released into the public domain. */
import * as crypto from "crypto";
function hash(algorithm, value) {
    if (Number.isInteger(value)) {
        let buff = new Uint8Array(16); // 128 bits
        let view = new DataView(buff.buffer);
        view.setBigUint64(0, BigInt(value), true);
        value = buff;
    }
    if (value instanceof Uint8Array) {
        const buffer = crypto.createHash(algorithm).update(value).digest();
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    throw new TypeError();
}
export class Panic extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, Panic.prototype);
    }
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#clarity-type-system
 */
export class Err extends Error {
    constructor(value) {
        super(""); // TODO
        this.value = value;
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
    if (a instanceof Uint8Array && b instanceof Uint8Array) {
        const result = new Uint8Array(a.byteLength + b.byteLength);
        result.set(a, 0);
        result.set(b, a.byteLength);
        return result;
    }
    throw new TypeError();
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export function contractCall(contractName, functionName, ...args) {
    throw new Error("not implemented yet"); // TODO
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
    if (list instanceof Array) {
        return list.filter(func);
    }
    throw new TypeError();
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#fold
 */
export function fold(func, list, initialValue) {
    if (list instanceof Array) {
        return list.reduce((accumulator, currentValue) => func(currentValue, accumulator), initialValue);
    }
    throw new TypeError();
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
    throw new Error("not implemented yet"); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export function ftTransfer(tokenName, amount, sender, recipient) {
    throw new Error("not implemented yet"); // TODO
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
    if (Number.isInteger(value)) {
        let buff = new Uint8Array(16); // 128 bits
        let view = new DataView(buff.buffer);
        view.setBigUint64(0, BigInt(value), true);
        value = buff;
    }
    if (value instanceof Uint8Array) {
        const sha256 = crypto.createHash('sha256').update(value).digest();
        const buffer = crypto.createHash('ripemd160').update(sha256).digest();
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    throw new TypeError();
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#is-eq
 */
export function isEq(value) {
    return false; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#is-err
 */
export function isErr(value) {
    return false; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#is-none
 */
export function isNone(value) {
    return false; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#is-ok
 */
export function isOk(value) {
    return false; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#is-some
 */
export function isSome(value) {
    return false; // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#keccak256
 */
export function keccak256(value) {
    return new Uint8Array(32); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#map
 */
export function map(func, list) {
    if (list instanceof Array) {
        return list.map(func);
    }
    throw new TypeError();
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
    throw new Error("not implemented yet"); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export function nftTransfer(assetClass, assetID, sender, recipient) {
    throw new Error("not implemented yet"); // TODO
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha256
 */
export function sha256(value) {
    return hash('sha256', value);
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512
 */
export function sha512(value) {
    return hash('sha512', value);
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512256
 */
export function sha512_256(value) {
    return hash('sha512-256', value);
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
    if (responseInput instanceof Err) {
        return responseInput.value;
    }
    throw new Panic("unwrapErrPanic");
}
/**
 * @link https://docs.blockstack.org/references/language-clarity#unwrap-panic
 */
export function unwrapPanic(optionInput) {
    if (optionInput === null) {
        throw new Panic("unwrapPanic");
    }
    if (optionInput instanceof Err) {
        throw new Panic("unwrapPanic");
    }
    return optionInput;
}
