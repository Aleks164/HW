const arrTen = [1, 3, 5, 6, 7, 32, 12, 23, 13, 9];

function sum() {
  function sumArr(total, value) {
    return total + value;
  }
  const sum2 = arrTen.reduce(sumArr);
  console.log(sum2);
}

function mult() {
  function multX2(value) {
    return value * 2;
  }
  const newArrTen = arrTen.map(multX2);
  return newArrTen;
}
function minAndmax() {
  const minMax = arrTen.sort((a, b) => a - b);

  console.log(minMax[0]);
  console.log(minMax[minMax.length - 1]);
}

export { minAndmax, mult, sum };
