function findEvenIndex(arr) {
  let returnValue = [];
  for (let i = 0; i < arr.length; i++) {
    let leftArray = arr.slice(0, i);
    let rightArray = arr.slice(i + 1);

    let leftTotal = leftArray.reduce((total, acc) => {
      return (total += acc);
    }, 0);

    let rightTotal = rightArray.reduce((total, acc) => {
      return (total += acc);
    }, 0);

    if (leftTotal === rightTotal) {
      returnValue.push(i);
      break;
    } else if (i === arr.length - 1) {
      returnValue.push(-1);
    }
  }

  return returnValue[0];
}
