const arrTen = [1, 3, 5, 6, 7, 32, 12, 23, 13, 9];
const calc = function () {
  const sum = arrTen.reduce(sumArr);

  function sumArr(total, value) {
    return total + value;
  }
  const newArrTen = arrTen.map(multX2);
  function multX2(value) {
    return value * 2;
  }
  const minMax = arrTen.sort((a, b) => a - b);

  console.log(minMax[0]);
  console.log(minMax[minMax.length - 1]);
};
module.exports = calc;
