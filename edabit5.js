// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
// Examples

// findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

// findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

// findBob(["Jimmy", "Layla", "James"]) ➞ -1

function findBob(names) {
  function containsBob(name) {
    return name === "Bob";
  }
  return names.findIndex(containsBob);
}

console.log(findBob(["Jimmy", "Layla"]));
