/* This is free and unencumbered software released into the public domain. */

import * as clarity from './clarity.js'

test('append', () => {
  expect(clarity.append([], 1)).toEqual([1])
  expect(clarity.append([1], 2)).toEqual([1, 2])
  expect(clarity.append([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
})

test('asContract', () => {
  // TODO
})

test('asMaxLen', () => {
  expect(clarity.asMaxLen(clarity.list(2, 2, 2), 3)).toEqual(clarity.some(clarity.list(2, 2, 2)))
  expect(clarity.asMaxLen(clarity.list(1, 2, 3), 2)).toEqual(clarity.none)
})

test('atBlock', () => {
  // TODO
})

test('blockHeight', () => {
  // TODO
})

test('concat(list...)', () => {
  expect(clarity.concat([], [])).toEqual([])
  expect(clarity.concat([1], [])).toEqual([1])
  expect(clarity.concat([], [1])).toEqual([1])
  expect(clarity.concat([1], [2])).toEqual([1, 2])
  expect(clarity.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
})

test('concat(buff...)', () => {
  expect(clarity.concat(Uint8Array.of(), Uint8Array.of())).toEqual(Uint8Array.of())
  expect(clarity.concat(Uint8Array.of(1), Uint8Array.of())).toEqual(Uint8Array.of(1))
  expect(clarity.concat(Uint8Array.of(), Uint8Array.of(1))).toEqual(Uint8Array.of(1))
  expect(clarity.concat(Uint8Array.of(1), Uint8Array.of(2))).toEqual(Uint8Array.of(1, 2))
  expect(clarity.concat(Uint8Array.of(1, 2), Uint8Array.of(3, 4))).toEqual(Uint8Array.of(1, 2, 3, 4))
})

test('contractCall', () => {
  // TODO
})

test('contractCaller', () => {
  // TODO
})

test('contractOf', () => {
  // TODO
})

test('defaultTo', () => {
  expect(clarity.defaultTo(2, clarity.some(1))).toEqual(1)
  expect(clarity.defaultTo(2, clarity.none)).toEqual(2)
})

test('err', () => {
  expect(clarity.err(1)).toEqual(new clarity.Err(1))
})

test('filter', () => {
  expect(clarity.filter((x) => !x, [true, false, true, false])).toEqual([false, false])
})

test('fold', () => {
  expect(clarity.fold((a, b) => a * b, [2, 2, 2], 1)).toEqual(8)
  expect(clarity.fold((a, b) => a * b, [2, 2, 2], 0)).toEqual(0)
  expect(clarity.fold((a, b) => a - b, [3, 7, 11], 2)).toEqual(5)
})

test('ftGetBalance', () => {
  // TODO
})

test('ftMint', () => {
  // TODO
})

test('ftTransfer', () => {
  // TODO
})

test('get', () => {
  const tuple = new Map()
  tuple.set("name", "blockstack")
  tuple.set("id", 1337)
  expect(clarity.get("id", tuple)).toEqual(1337)
})

test('getBlockInfo', () => {
  // TODO
})

test('hash160(0)', () => {
  const input = 0
  const expectedHex = 'e4352f72356db555721651aa612e00379167b30f'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.hash160(input)).toEqual(expected)
})

test('isEq', () => {
  expect(() => clarity.isEq()).toThrow(TypeError)
  expect(clarity.isEq(1, 1)).toBe(true)
  expect(clarity.isEq(true, false)).toBe(false)
  expect(() => clarity.isEq("abc", 234, 234)).toThrow(TypeError)
})

test('isErr', () => {
  expect(clarity.isErr(1)).toBe(false)
  expect(clarity.isErr(clarity.err(1))).toBe(true)
})

test('isNone', () => {
  expect(clarity.isNone(1)).toBe(false)
  expect(clarity.isNone(clarity.none)).toBe(true)
})

test('isOk', () => {
  expect(clarity.isOk(1)).toBe(true)
  expect(clarity.isOk(clarity.err(1))).toBe(false)
})

test('isSome', () => {
  expect(clarity.isSome(1)).toBe(true)
  expect(clarity.isSome(clarity.none)).toBe(false)
})

test('keccak256', () => {
  const input = 0
  const expectedHex = 'f490de2920c8a35fabeb13208852aa28c76f9be9b03a4dd2b3c075f7a26923b4'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.keccak256(input)).toEqual(expected)
})

test('len', () => {
  expect(clarity.len("blockstack")).toEqual(10)
  expect(clarity.len(clarity.list(1, 2, 3, 4, 5))).toEqual(5)
})

test('list', () => {
  expect(clarity.list(1, 2, 3)).toEqual([1, 2, 3])
  expect(() => clarity.list(1, 2, "3")).toThrow(TypeError)
})

test('map', () => {
  expect(clarity.map((x) => !x, [true, false, true, false])).toEqual([false, true, false, true])
})

test('mapDelete', () => {
  const names = new Map()
  const key = new Map()
  key.set("name", "blockstack")
  const val = new Map()
  val.set("id", 1337)
  names.set(key, val)
  expect(clarity.mapDelete(names, key)).toBe(true)
  expect(clarity.mapDelete(names, key)).toBe(false)
})

test('mapGet', () => {
  const names = new Map()
  const key = new Map()
  key.set("name", "blockstack")
  const val = new Map()
  val.set("id", 1337)
  names.set(key, val)
  expect(clarity.mapGet(names, key)).toEqual(clarity.some(val))
})

test('mapInsert', () => {
  const names = new Map()
  const key = new Map()
  key.set("name", "blockstack")
  const val = new Map()
  val.set("id", 1337)
  expect(clarity.mapInsert(names, key, val)).toEqual(true)
  expect(clarity.mapInsert(names, key, val)).toEqual(false)
})

test('mapSet', () => {
  const names = new Map()
  const key = new Map()
  key.set("name", "blockstack")
  const val = new Map()
  val.set("id", 1337)
  expect(clarity.mapSet(names, key, val)).toEqual(true)
  expect(clarity.mapSet(names, key, val)).toEqual(true)
})

test('mod', () => {
  expect(clarity.mod(2, 3)).toEqual(2)
  expect(clarity.mod(5, 2)).toEqual(1)
  expect(clarity.mod(7, 1)).toEqual(0)
  expect(() => clarity.mod(7, 0)).toThrow(RangeError)
})

test('nftGetOwner', () => {
  // TODO
})

test('nftMint', () => {
  // TODO
})

test('nftTransfer', () => {
  // TODO
})

test('none', () => {
  expect(clarity.none).toEqual(null)
})

test('not', () => {
  expect(clarity.not(true)).toBe(false)
  expect(clarity.not(false)).toBe(true)
})

test('ok', () => {
  expect(clarity.ok(1)).toEqual(1)
})

test('pow', () => {
  expect(clarity.pow(2, 3)).toEqual(8)
  expect(clarity.pow(2, 2)).toEqual(4)
  expect(clarity.pow(7, 1)).toEqual(7)
})

test('print', () => {
  expect(clarity.print(1 + 2 + 3)).toEqual(6)
})

test('sha256(0)', () => {
  const input = 0
  const expectedHex = '374708fff7719dd5979ec875d56cd2286f6d3cf7ec317a3b25632aab28ec37bb'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.sha256(input)).toEqual(expected)
})

test('sha256(1)', () => {
  const input = 1
  const expectedHex = '4cbbd8ca5215b8d161aec181a74b694f4e24b001d5b081dc0030ed797a8973e0'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.sha256(input)).toEqual(expected)
})

test('sha512(0)', () => {
  const input = 0
  const expectedHex = '0b6cbac838dfe7f47ea1bd0df00ec282fdf45510c92161072ccfb84035390c4da743d9c3b954eaa1b0f86fc9861b23cc6c8667ab232c11c686432ebb5c8c3f27'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.sha512(input)).toEqual(expected)
})

test('sha512(1)', () => {
  const input = 1
  const expectedHex = '6fcee9a7b7a7b821d241c03c82377928bc6882e7a08c78a4221199bfa220cdc55212273018ee613317c8293bb8d1ce08d1e017508e94e06ab85a734c99c7cc34'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.sha512(input)).toEqual(expected)
})

test('sha512_256(0)', () => {
  const input = 0
  const expectedHex = 'e41c9660b04714cdf7249f0fd6e6c5556f54a7e04d299958b69a877e0fada2fb'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.sha512_256(input)).toEqual(expected)
})

test('sha512_256(1)', () => {
  const input = 1
  const expectedHex = '515a7e92e7c60522db968d81ff70b80818fc17aeabbec36baf0dda2812e94a86'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.sha512_256(input)).toEqual(expected)
})

test('some', () => {
  expect(clarity.some(1)).toEqual(1)
})

test('toInt', () => {
  // TODO
})

test('toUint', () => {
  // TODO
})

test('tryUnwrap', () => {
  expect(clarity.tryUnwrap(clarity.some(42))).toBe(42)
  expect(clarity.tryUnwrap(clarity.none)).toBe(clarity.none)
  expect(clarity.tryUnwrap(clarity.ok(42))).toBe(42)
  expect(clarity.tryUnwrap(clarity.err(42))).toEqual(clarity.err(42))
})

test('tuple', () => {
  expect(clarity.tuple(["name", "blockstack"], ["id", 1337]))
    .toEqual(new Map(Object.entries({"name": "blockstack", "id": 1337})))
})

test('txSender', () => {
  // TODO
})

test('unwrap', () => {
  expect(clarity.unwrap(clarity.ok(42))).toBe(42)
})

test('unwrapErr', () => {
  expect(clarity.unwrapErr(clarity.err(1), false)).toBe(1)
  expect(clarity.unwrapErr(clarity.ok(1), 2)).toBe(2)
})

test('unwrapErrPanic', () => {
  expect(clarity.unwrapErrPanic(clarity.err(1))).toBe(1)
  expect(() => clarity.unwrapErrPanic(clarity.ok(42))).toThrow(clarity.Panic)
})

test('unwrapPanic', () => {
  expect(clarity.unwrapPanic(clarity.ok(42))).toBe(42)
  expect(() => clarity.unwrapPanic(clarity.none)).toThrow(clarity.Panic)
  expect(() => clarity.unwrapPanic(clarity.err(1))).toThrow(clarity.Panic)
})

test('xor', () => {
  expect(clarity.xor(1, 2)).toEqual(3)
  expect(clarity.xor(120, 280)).toEqual(352)
})
