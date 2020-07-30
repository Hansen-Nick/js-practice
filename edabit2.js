// The number 6090609 has a special property: if you turn the number upside down (imagine rotating your screen 180 degrees), you get 6090609 again.

// Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.

// Examples
// sameUpsidedown("6090609") ➞ true

// sameUpsidedown("9669") ➞false
// // Becomes 6996 when upside down.

// sameUpsidedown("69069069") ➞ true

function sameUpsidedown(strNum) {
  let stringArray = strNum.split("");

  let testArray = [];

  for (i = 0; i < stringArray.length / 2; i++) {
    if (
      stringArray[i] != stringArray[stringArray.length - 1] ||
      (stringArray[i] && stringArray[stringArray.length - 1] === 0)
    ) {
    }
  }

  if (stringArray.length > testArray.length) {
    return false;
  } else {
    return true;
  }
}
