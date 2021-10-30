const calc = require('./calc');

it('the arithmetic mean of odd numbers from 1 to 50 is 25', () => {
  jest.spyOn(calc(), 'prompt').returnValue('50');
  expect(calc()).toHaveBeenCalledWith(25);
});
