const calc = require('./calc');

beforeEach(() => {
  console.log = jest.fn();
  calc();
});

it('console from 50 to 100 contain 55', () => {
  expect(console.log).toHaveBeenCalledWith(55);
});
it('console from 50 to 100 is not contain 111', () => {
  expect(console.log).not.toHaveBeenCalledWith(111);
});
it('console from 50 to 100 contain 100', () => {
  expect(console.log).toHaveBeenCalledWith(100);
});
