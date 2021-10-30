const calc = require("./calc");

beforeEach(() => {
  console.log = jest.fn();
});

it("6 is biger then 4 ", () => {
  calc(4, 6);
  expect(console.log).toHaveBeenCalledWith(6);
});
it("-1 is biger then -5 ", () => {
  calc(-1, -5);
  expect(console.log).toHaveBeenCalledWith(-1);
});
it("1 is biger then 0 ", () => {
  calc(1, 0);
  expect(console.log).toHaveBeenCalledWith(1);
});
