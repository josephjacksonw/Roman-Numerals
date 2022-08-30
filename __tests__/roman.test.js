import roman from './../src/roman.js';

describe('roman', () => {

  test('should return the roman numeral of the input', () => {
    const input = 10
    expect(roman(input)).toEqual("X")
  })


})