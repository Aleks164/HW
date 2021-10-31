import { minAndmax, mult, sum } from "./calc";

it("mult on 2 arrTen contein [2,6,10,64]", () => {
  expect([...mult()]).toEqual(expect.arrayContaining([2, 6, 10, 64]));
});
it("sum array is 111", () => {
  console.log = jest.fn();
  sum();
  expect(console.log).toHaveBeenCalledWith(111);
});
it("arrTen have min '1' and max '32' volumes", () => {
  console.log = jest.fn();
  minAndmax();
  expect(console.log).toHaveBeenCalledWith(1);
  expect(console.log).toHaveBeenCalledWith(32);
});
