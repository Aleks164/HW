import regExp from "./calc";

it("01.11.2021 it is date", () => {
  jest.spyOn(window, "prompt").mockReturnValue("01.11.2021");
  const consoleSpy = jest.spyOn(console, "log");
  regExp();
  expect(consoleSpy).toHaveBeenCalledWith("01.11.2021 it is date");
});
it("+7-960-255-15-85 it is telephon number", () => {
  jest.spyOn(window, "prompt").mockReturnValue("+7-960-255-15-85");
  const consoleSpy = jest.spyOn(console, "log");
  regExp();
  expect(consoleSpy).toHaveBeenCalledWith(
    "+7-960-255-15-85 it is telephon number"
  );
});
it("+7-960-255-15-85-44 it is telephon number", () => {
  jest.spyOn(window, "prompt").mockReturnValue("+7-960-255-15-85-44");
  const consoleSpy = jest.spyOn(console, "log");
  regExp();
  expect(consoleSpy).toHaveBeenCalledWith(
    "+7-960-255-15-85-44 it is wrong telephon number"
  );
});
it("adww.weqe@qwe.qwe.ru it is telephon number", () => {
  jest.spyOn(window, "prompt").mockReturnValue("adww.weqe@qwe.qwe.ru");
  const consoleSpy = jest.spyOn(console, "log");
  regExp();
  expect(consoleSpy).toHaveBeenCalledWith("adww.weqe@qwe.qwe.ru it is email");
});
it("123qwe@@++ is neither a phone nor a mail nor a date", () => {
  jest.spyOn(window, "prompt").mockReturnValue("123qwe@@++");
  const consoleSpy = jest.spyOn(console, "log");
  regExp();
  expect(consoleSpy).toHaveBeenCalledWith(
    "123qwe@@++ is neither a phone nor a mail nor a date"
  );
});
