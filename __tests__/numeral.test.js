import { TestScheduler } from 'jest';
import numCheck from './../src/numeral.js';

describe('numCheck', () => {

  test('should check to see if the input is a number', () => {
    const input = "hello"
    numCheck(input)
    expect(numCheck(input)).toEqual("Not a valid input")
  })



})