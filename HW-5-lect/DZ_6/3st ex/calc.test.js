const pow = require('./calc');

it('pow(1, 44) is 1', () => {
  expect(pow(1, 44)).toBe(1);
});
it('pow(0, 44) is 1', () => {
  expect(pow(0, 44)).toBe(0);
});
it('pow(1, 44) is 1', () => {
  expect(pow(44, 0)).toBe(1);
});
