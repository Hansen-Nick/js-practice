const decoder = (string, columns, rows) => {
  let letterArray = string.split("");
  let masterArray = [];

  for (i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      masterArray.push(letterArray.splice(0, columns));
    } else {
      masterArray.push(letterArray.splice(0, columns).reverse());
    }
  }

  const decodedArray = [];
  for (total = 0; total < columns; total++) {
    for (outeri = 0; outeri < rows; outeri++) {
      for (i = 0; i <= columns; i++) {
        if (i === outeri) {
          decodedArray.push(masterArray[outeri][total]);
        }
      }
    }
  }
  return decodedArray.join("");
};

console.log(decoder("tnlewrnyoiohepknwigiaelreahsnhttnocisemoex", 6, 7));
