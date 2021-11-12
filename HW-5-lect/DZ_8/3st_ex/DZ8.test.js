import calc from "./calc";

it("betwen 20.10.2021 and 30.10.2021 first is older ", () => {
  const consoleSpy = jest.spyOn(console, "log");
  calc("20.10.2021", "30.10.2021");
  expect(consoleSpy).toHaveBeenCalledWith("first is older");
});
it("betwen 20.10.2021 and 10.10.2021 second is older", () => {
  const consoleSpy = jest.spyOn(console, "log");
  calc("20.10.2021", "10.10.2021");
  expect(consoleSpy).toHaveBeenCalledWith("second is older");
});
it("20.20.2021 is wrong date", () => {
  const consoleSpy = jest.spyOn(console, "log");
  calc("20.20.2021", "10.10.2021");
  expect(consoleSpy).toHaveBeenCalledWith("wrong date");
});
it("32.10.2021 is wrong date", () => {
  const consoleSpy = jest.spyOn(console, "log");
  calc("32.10.2021", "10.10.2021");
  expect(consoleSpy).toHaveBeenCalledWith("wrong date");
});
