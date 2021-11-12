import eqOfSecDeg from "./calc";

it("if 0,2,3 it isn't a equation of the second degree", () => {
  jest.spyOn(window, "prompt").mockReturnValue("0,2,3");
  const consoleSpy = jest.spyOn(console, "log");
  eqOfSecDeg();
  expect(consoleSpy).toHaveBeenCalledWith(
    "it isn't a equation of the second degree"
  );
});
it("if 3,7,-6 then x1=0.67 and x2=-3", () => {
  jest.spyOn(window, "prompt").mockReturnValue("3,7,-6");
  const consoleSpy = jest.spyOn(console, "log");
  eqOfSecDeg();
  expect(consoleSpy).toHaveBeenCalledWith(0.67, -3);
});
it("if 1,0,4 then x1=(i4)/2 and x2=(-i4)/2", () => {
  jest.spyOn(window, "prompt").mockReturnValue("1,0,4");
  const consoleSpy = jest.spyOn(console, "log");
  eqOfSecDeg();
  expect(consoleSpy).toHaveBeenCalledWith("(i4)/2", "(-i4)/2");
});
it("if 1,-2,1 then x1=1 and x2=1", () => {
  jest.spyOn(window, "prompt").mockReturnValue("1,-2,1");
  const consoleSpy = jest.spyOn(console, "log");
  eqOfSecDeg();
  expect(consoleSpy).toHaveBeenCalledWith(1, 1);
});
it("if '' you have not entered anything", () => {
  jest.spyOn(window, "prompt").mockReturnValue("");
  const consoleSpy = jest.spyOn(console, "log");
  eqOfSecDeg();
  expect(consoleSpy).toHaveBeenCalledWith("you have not entered anything");
});
it("if '1' then you have entered wrong data", () => {
  jest.spyOn(window, "prompt").mockReturnValue("1");
  const consoleSpy = jest.spyOn(console, "log");
  eqOfSecDeg();
  expect(consoleSpy).toHaveBeenCalledWith("you have entered wrong data");
});
