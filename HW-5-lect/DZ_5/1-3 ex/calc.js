const arrTen = [1, 3, 5, 6, 7, 32, 12, 23, 13, 9];
function calc() {
  function sumArr(total, value) {
    return total + value;
  }

  function multX2(value) {
    return value * 2;
  }
  const sum = arrTen.reduce(sumArr);
  const newArrTen = arrTen.map(multX2);
  const minMax = arrTen.sort((a, b) => a - b);

  console.log(sum);
  console.log(newArrTen);
  console.log(minMax[0]);
  console.log(minMax[minMax.length - 1]);
}
export default calc;
