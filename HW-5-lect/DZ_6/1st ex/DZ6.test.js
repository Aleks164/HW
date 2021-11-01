import diff from "./calc";

it("if diff(4,5) then 1", () => {
  expect(diff(4, 5)).toBe(1);
});
it("if diff(7,4) then 3", () => {
  expect(diff(4, 7)).toBe(3);
});
it('if diff("w", "r") then NaN', () => {
  expect(diff("w", "r")).toBeNaN();
});
