declare type bool = boolean;
declare type buff = ArrayBuffer;
declare type expr<A> = () => A;
declare type int = number;
declare type optional<T> = T | null;
declare type principal = string;
declare type err<E> = Err<E>;
declare type response<T, E> = T | err<E>;
declare type trait = string;
declare type uint = number;
/**
 * @link https://docs.blockstack.org/references/language-clarity#clarity-type-system
 */
export declare class Err<T> extends Error {
    constructor(value: T);
}
export declare function requireVersion(version: string): void;
export declare function requireFeature(feature: string): void;
/**
 * @link https://docs.blockstack.org/references/language-clarity#as-contract
 */
export declare function asContract<A>(expr: expr<A>): A;
/**
 * @link https://docs.blockstack.org/references/language-clarity#at-block
 */
export declare function atBlock<A>(blockHash: buff, expr: expr<A>): A;
/**
 * @link https://docs.blockstack.org/references/language-clarity#block-height
 */
export declare function blockHeight(): uint;
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-call
 */
export declare function contractCall<A, B>(contractName: trait, functionName: string, ...args: any): response<A, B>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-caller
 */
export declare function contractCaller(): principal;
/**
 * @link https://docs.blockstack.org/references/language-clarity#contract-of
 */
export declare function contractOf(contractName: trait): principal;
/**
 * @link https://docs.blockstack.org/references/language-clarity#err
 */
export declare function err<T>(value: T): Err<T>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-get-balance
 */
export declare function ftGetBalance(tokenName: string, principal: principal): uint;
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-mint
 */
export declare function ftMint(tokenName: string, amount: uint, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#ft-transfer
 */
export declare function ftTransfer(tokenName: string, amount: uint, sender: principal, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#get-block-info
 */
export declare function getBlockInfo(propName: string, blockHeight: uint): optional<buff> | optional<uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#hash160
 */
export declare function hash160(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#keccak256
 */
export declare function keccak256(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-get-owner
 */
export declare function nftGetOwner(assetClass: string, assetID: string): optional<principal>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-mint
 */
export declare function nftMint(assetClass: string, assetID: string, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#nft-transfer
 */
export declare function nftTransfer(assetClass: string, assetID: string, sender: principal, recipient: principal): response<bool, uint>;
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha256
 */
export declare function sha256(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512
 */
export declare function sha512(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#sha512256
 */
export declare function sha512_256(value: buff | uint | int): buff;
/**
 * @link https://docs.blockstack.org/references/language-clarity#tx-sender
 */
export declare function txSender(): principal;
export {};
