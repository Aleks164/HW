import calc from "./calc";

it('the sum of each member 123 is 6"', () => {
  jest.spyOn(window, "prompt").mockReturnValue("123");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith(6);
});
it('the sum of each member 246 is 12"', () => {
  jest.spyOn(window, "prompt").mockReturnValue("246");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith(12);
});
it('"word" is "Wrong value"', () => {
  jest.spyOn(window, "prompt").mockReturnValue("word");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("Wrong value");
});
it('"1234" is "Wrong value"', () => {
  jest.spyOn(window, "prompt").mockReturnValue("1234");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("Wrong value");
});
