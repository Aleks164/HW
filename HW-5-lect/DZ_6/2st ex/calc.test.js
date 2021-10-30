import isWord from "./calc";

it('"one word" is false', () => {
  expect(isWord("one word")).toBeFalsy();
});
it('"word" is true', () => {
  expect(isWord("word")).toBeTruthy();
});
it("1 is false", () => {
  expect(isWord(1)).toBeFalsy();
});
it('"" is Undefined', () => {
  expect(isWord()).toBeFalsy();
});
