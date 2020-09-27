function oddishOrEvenish(num) {
  let numArray = num.toString().split("");

  let nums = numArray.map((item) => parseInt(item));

  let total = nums.reduce((total, acc) => {
    return total + acc;
  }, 0);

  if (total % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}
