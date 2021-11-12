import calc from "./calc";

beforeEach(() => {
  console.log = jest.fn();
});
it("2 * 3 to equal 6 & 2 + 3 to equal 5", () => {
  calc(2, 3);
  expect(console.log).toHaveBeenCalledWith("6 5");
});
it("3 * 4 to equal 12 & 3 + 4 to equal 7", () => {
  calc(3, 4);
  expect(console.log).toHaveBeenCalledWith("12 7");
});
