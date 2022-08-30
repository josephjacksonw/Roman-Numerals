import roman from './../src/roman.js';

describe('roman', () => {

  test('should return the roman numeral of the input', () => {
    const input = 10
    expect(roman(input)).toEqual("X")
  })

  test('should return M for every 1000 inputted', () => {
    const input = 2000
    expect(roman(input)).toEqual("MM")
  })

  test('should return CM for every 900 inputted', () => {
    const input = 900
    expect(roman(input)).toEqual("CM")
  })

  test('should return D for every 500 inputted', () => {
    const input = 2500
    expect(roman(input)).toEqual("MMD")
  })
  test('should return CD for every 400 inputted', () => {
    const input = 1432
    expect(roman(input)).toEqual("MCDXXXII")
  })

})