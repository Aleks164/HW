import { prompName, assignObj, destrAssig } from "./calc";

it("user have prop name: 'Jonn', age: '15'", () => {
  jest.spyOn(window, "prompt").mockReturnValue("15");
  expect(prompName()).toEqual(
    expect.objectContaining({
      name: "Jonn",
      age: "15",
    })
  );
});
it("admin have prop name: 'Jonn', age: '15'", () => {
  expect(assignObj()).toEqual(
    expect.objectContaining({
      name: "Jonn",
      age: "15",
      role: "admin",
    })
  );
});
it("arrTen have min '1' and max '32' volumes", () => {
  console.log = jest.fn();
  destrAssig();
  expect(console.log).toHaveBeenCalledWith("Jonn", "15", "admin");
});
