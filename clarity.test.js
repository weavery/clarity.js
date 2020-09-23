/* This is free and unencumbered software released into the public domain. */

import * as clarity from './clarity.js';

test('append', () => {
  expect(clarity.append([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
});

test('blockHeight', () => {
  expect(clarity.blockHeight()).toBe(0)  // TODO
});

test('concat', () => {
  expect(clarity.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
});
