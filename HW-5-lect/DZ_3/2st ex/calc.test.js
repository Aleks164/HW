import calc from './calc';

beforeEach(() => {
  console.log = jest.fn();
  calc();
});

it('multiplication table : 7x8=56', () => {
  expect(console.log).toHaveBeenCalledWith('7x8=56');
});
it('multiplication table : 7x2=14', () => {
  expect(console.log).toHaveBeenCalledWith('7x2=14');
});
it('multiplication table : 7x7=49', () => {
  expect(console.log).toHaveBeenCalledWith('7x7=49');
});
