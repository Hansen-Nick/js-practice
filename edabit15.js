function paths(n) {
  let numArray = [];
  for (let number = n; number < 1; number -= 1) {
    numArray.push(number);
  }

  return numArray;
}

console.log(paths(5));
