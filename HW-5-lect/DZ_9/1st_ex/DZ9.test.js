import pif from "./calc";

it("the triangle with sides 4, 5, 3 is isosceles", () => {
  expect(pif(4, 5, 3)).toBeTruthy();
});
it("the triangle with sides 4, 7, 9 isn't isosceles", () => {
  expect(pif(4, 7, 9)).not.toBeTruthy();
});
it("the triangle with sides 2,3,4 isn't isosceles", () => {
  expect(pif(2, 3, 4)).not.toBeTruthy();
});
