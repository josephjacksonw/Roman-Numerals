import { TestScheduler } from 'jest';
import numCheck from './../src/numeral.js';

describe('numCheck', () => {

  test('should check to see if the input is a number', () => {
    const input = "hello"
    expect(numCheck(input)).toEqual("Not a valid input")
  })

  test('should return the number if the input is a number', () => {
    const input = 2
    expect(numCheck(input)).toEqual(2)
  })

  test('should check to see if there is an input', () => {
    const input = ""
    expect(numCheck(input)).toEqual("Not a valid input")
  })
})