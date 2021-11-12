import calc from "./calc";

it("then R equal 5 circumference is equal 31.42 , circle area is equal 78.54", () => {
  jest.spyOn(window, "prompt").mockReturnValue("5");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith(
    "circumference is equal 31.42, circle area is equal 78.54"
  );
});
it("when R equal 'radius' it is incorrect data", () => {
  jest.spyOn(window, "prompt").mockReturnValue("radius");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("You entered incorrect data");
});
it("when R equal -1 it is incorrect data", () => {
  jest.spyOn(window, "prompt").mockReturnValue("-1");
  const consoleSpy = jest.spyOn(console, "log");
  calc();
  expect(consoleSpy).toHaveBeenCalledWith("You entered incorrect data");
});
