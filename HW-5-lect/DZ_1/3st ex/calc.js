const calc = function () {
  const prom = window.prompt('Enter a three-digit number', '123');
  const split = prom.split('');
  const sum = Number(split[0]) + Number(split[1]) + Number(split[2]);
  if (split.length === 3 && typeof sum === 'number') return console.log(sum);
  return console.log('Wrong value');
};

module.exports = calc;
