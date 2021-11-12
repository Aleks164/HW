import calc from "./calc";

beforeEach(() => {
  console.log = jest.fn();
});

it('the sum of the letters in the "word" and 1234 is 8"', () => {
  calc("word", 1234);
  expect(console.log).toHaveBeenCalledWith(8);
});
it('the sum of the letters in the 1 and 1 is 2"', () => {
  calc(1, 1);
  expect(console.log).toHaveBeenCalledWith(2);
});
it('the sum of the letters in the "" and "" is 0"', () => {
  calc("", "");
  expect(console.log).toHaveBeenCalledWith(0);
});
