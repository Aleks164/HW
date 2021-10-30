const calc = require('./calc');

it('multiplication table : 7x8=56', () => {
  console.log = jest.fn();
  calc();
  expect(console.log).toHaveBeenCalledWith('7x8=56');
});
it('multiplication table : 7x2=14', () => {
  console.log = jest.fn();
  calc();
  expect(console.log).toHaveBeenCalledWith('7x2=14');
});
it('multiplication table : 7x7=49', () => {
  console.log = jest.fn();
  calc();
  expect(console.log).toHaveBeenCalledWith('7x7=49');
});
