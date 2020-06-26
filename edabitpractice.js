// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"

// replaceVowel("chembur") ➞ "ch2mb5r"

// replaceVowel("khandbari") ➞ "kh1ndb1ri"

function replaceVowel(word) {
  let stringArray = word.split("");

  let changedString = [];

  stringArray.forEach((item) => {
    if (item === "a") {
      changedString.push("1");
    } else if (item === "e") {
      changedString.push("2");
    } else if (item === "i") {
      changedString.push("3");
    } else if (item === "o") {
      changedString.push("4");
    } else if (item === "u") {
      changedString.push("5");
    } else {
      changedString.push(item);
    }
  });

  return changedString.join("");
}

console.log(replaceVowel("karachi"));

// replaceVowel("chembur") ➞ "ch2mb5r"

// replaceVowel("khandbari") ➞ "kh1ndb1ri"
