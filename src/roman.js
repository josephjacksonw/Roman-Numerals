export default function roman(i) {
  let roman = ""
  let numRemaining = i
  while (numRemaining >= 1000) {
    roman += "M"
    numRemaining -= 1000
  }
  while (numRemaining >= 900) {
    roman += "CM"
    numRemaining -= 900
  }
  while (numRemaining >= 500) {
    roman += "D"
    numRemaining -= 500
  }
  while (numRemaining >= 400) {
    roman += "CD"
    numRemaining -= 400
  }
  while (numRemaining >= 100) {
    roman += "C"
    numRemaining -= 100
  }
  while (numRemaining >= 90) {
    roman += "XC"
    numRemaining -= 90
  }
  while (numRemaining >= 50) {
    roman += "L"
    numRemaining -= 50
  }
  while (numRemaining >= 40) {
    roman += "XL"
    numRemaining -= 40
  }
  while (numRemaining >= 10) {
    roman += "X"
    numRemaining -= 10
  }
  while (numRemaining >= 9) {
    roman += "IX"
    numRemaining -= 9
  }
  while (numRemaining >= 5) {
    roman += "V"
    numRemaining -= 5
  }
  while (numRemaining >= 4) {
    roman += "IV"
    numRemaining -= 4
  }
  while (numRemaining >= 1) {
    roman += "I"
    numRemaining -= 1
  }
  return roman
}