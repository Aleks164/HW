import calc from "./calc";

it("30.10.2021 это суббота", () => {
  jest.spyOn(window, "prompt").mockReturnValue("30.10.2021");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("суббота");
});
it("32.10.2021 это wrong date", () => {
  jest.spyOn(window, "prompt").mockReturnValue("32.10.2021");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("wrong date");
});
it("01.01.2022 это суббота", () => {
  jest.spyOn(window, "prompt").mockReturnValue("01.01.2022");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("суббота");
});
it("wrong date это wrong date", () => {
  jest.spyOn(window, "prompt").mockReturnValue("wrong date");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("wrong date");
});
