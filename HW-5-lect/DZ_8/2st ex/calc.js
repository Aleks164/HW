const calc = function () {
  const date = new Date();
  const newDate = new Date().setHours(0, 0, 0, 0);
  const diff = date - newDate;
  const diffInMin = diff / 1000 / 60;
  const diffInMinRound = diffInMin.toFixed(0);
  console.log(diffInMinRound);
};
module.exports = calc;
