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

test('err', () => {
  // TODO
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

test('getBlockInfo', () => {
  // TODO
})

test('hash160(0)', () => {
  const input = 0
  const expectedHex = 'e4352f72356db555721651aa612e00379167b30f'
  const expected = Uint8Array.from(Buffer.from(expectedHex, 'hex'))
  expect(clarity.hash160(input)).toEqual(expected)
})

test('keccak256', () => {
  // TODO
})

test('map', () => {
  expect(clarity.map((x) => !x, [true, false, true, false])).toEqual([false, true, false, true])
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

test('toInt', () => {
  // TODO
})

test('toUint', () => {
  // TODO
})

test('tryUnwrap', () => {
  // TODO
})

test('txSender', () => {
  // TODO
})

test('unwrap', () => {
  // TODO
})

test('unwrapErr', () => {
  // TODO
})

test('unwrapErrPanic', () => {
  expect(clarity.unwrapErrPanic(clarity.err(1))).toBe(1)
  expect(() => clarity.unwrapErrPanic(42)).toThrow(clarity.Panic)
})

test('unwrapPanic', () => {
  expect(clarity.unwrapPanic(42)).toBe(42)
  expect(() => clarity.unwrapPanic(null)).toThrow(clarity.Panic)
  expect(() => clarity.unwrapPanic(clarity.err(1))).toThrow(clarity.Panic)
})
