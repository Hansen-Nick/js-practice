function filter_list(l) {
  // Return a new array with the strings filtered out
  let ints = l.filter((item) => {
    return Number.isInteger(item);
  });

  return ints;
}

console.log(filter_list([1, "i", 43, "gh"]));
