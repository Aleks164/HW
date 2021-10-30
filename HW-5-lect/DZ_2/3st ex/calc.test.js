import calc from "./calc";

it("is able to put circle(10) inside square(15)", () => {
  expect(calc(10, 15)).toBe("fits");
});
it("is't able to put circle(10) inside square(10)", () => {
  expect(calc(10, 10)).not.toBe("fits");
});
it("is able to put circle(10) inside square(10)", () => {
  expect(calc(10, 10)).toBe("no it fits");
});

it("is able to put circle(5) inside square(15)", () => {
  expect(calc(5, 15)).toBe("fits");
});
