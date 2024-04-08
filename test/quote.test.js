import { expect, test } from 'vitest'
import { breakdown } from '../src/quote.js'

test('breakdown', () => {
  expect(breakdown('1,2')).toStrictEqual(['1','2']);
  expect(breakdown('1, 2')).toStrictEqual(['1','2']);
})