//Create a function that moves all capital letters to the front of a word.
function capToFront(s) {
  let stringArray = s.split("");
  let uppercaseArray = [];
  let lowercaseArray = [];
  stringArray.forEach((letter) => {
    if (letter === letter.toUpperCase()) {
      uppercaseArray.push(letter);
    } else {
      lowercaseArray.push(letter);
    }
  });

  let upperString = uppercaseArray.join("");
  let lowerString = lowercaseArray.join("");

  return upperString + lowerString;
}

capToFront("HhuuEtt");
