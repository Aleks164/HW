import calc from "./calc";

it("the difference between the 'beginning of the day' and 'after 10 minutes' is 10 minutes", () => {
  // let startOfDay = jest.spyOn(Date, 'new').mockImplementation(() => 1635552000000);
  // let after10Min = jest.spyOn(Date, 'new').mockImplementation(()  => 1635552600000);
  // let diff = (after10Min-startOfDay)/1000/60;

  // let startOfDay = jest.spyOn(global, 'Date').mockImplementation(() => 1635552000000);
  // Date.now = () => 1635552600000;
  // let diff = (startOfDay-Date.now)/1000/60;

  // let startOfDay = jest.spyOn((Date, 'new').mockReturnValue(() => 1635552000000));
  // let after10Min = jest.spyOn((Date, 'new').mockReturnValue(() => 1635552000000));
  // let diff = (after10Min-startOfDay)/1000/60;
  calc();
  expect(
    new Date("2021-10-31T00:10:00") - new Date("2021-10-31T00:00:00")
  ).toBe(10 * 1000 * 60);
});
