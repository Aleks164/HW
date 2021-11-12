import calc from "./calc";

let spy;
afterEach(() => {
  spy.mockRestore();
});

it("the difference between the 'beginning of the day' and 'after 10 minutes' is 10 minutes", () => {
  const mockDate = new Date(2021, 9, 31, 0, 10, 0);
  spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith(10);
});
it("the difference between the 'beginning of the day' and 'after 70 minutes' is 70 minutes", () => {
  const mockDate = new Date(2021, 9, 31, 1, 10, 0);
  spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith(70);
});
it("the difference between the 'beginning of the day' and 'after 2h and 30 minutes' is 150 minutes", () => {
  const mockDate = new Date(2021, 9, 31, 2, 30, 0);
  spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith(150);
});
