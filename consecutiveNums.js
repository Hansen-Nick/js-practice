function firstNonConsecutive(arr) {
  let nonConsecutive = arr.filter((item, idx) => {
    if (idx === 0) {
      return false;
    } else if (item === arr[idx - 1] + 1) {
      return false;
    } else {
      return true;
    }
  });

  if (nonConsecutive.length === 0) {
    return null;
  } else {
    return nonConsecutive[0];
  }
}
