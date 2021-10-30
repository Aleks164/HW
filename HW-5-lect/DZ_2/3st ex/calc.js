const calc = function (circle, square) {
  const d = ((4 * circle) / Math.PI) ** (1 / 2);
  const a = square ** (1 / 2);
  if (d < a) {
    return "fits";
  }

  return "no it fits";
};
module.exports = calc;
