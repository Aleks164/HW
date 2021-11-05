import calc from "./calc";

it("returns 28.10.2021 это четверг", () => {
  jest.spyOn(window, "prompt").mockReturnValue("28.10.2021");
  window.alert = jest.fn();
  calc();
  expect(window.alert).toHaveBeenCalledWith(
    "28.10.2021 это четверг" || "28.10.2021 это Thursday"
  );
});
it("returns 28.10.2022 это пятница", () => {
  jest.spyOn(window, "prompt").mockReturnValue("28.10.2022");
  window.alert = jest.fn();
  calc();
  expect(window.alert).toHaveBeenCalledWith(
    "28.10.2022 это пятница" || "28.10.2022 это Friday"
  );
});
it("returns 123 это пятница", () => {
  jest.spyOn(window, "prompt").mockReturnValue("123");
  window.alert = jest.fn();
  calc();
  expect(window.alert).toHaveBeenCalledWith("Invalid date type");
});
