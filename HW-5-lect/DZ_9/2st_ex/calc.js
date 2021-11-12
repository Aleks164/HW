function calc() {
  const prom = window.prompt("Enter a number - the radius of the circle", "5");
  const L = Math.PI * 2 * prom;
  const S = Math.PI * prom ** 2;
  if (typeof Number(prom) === "number" && prom > 0) {
    console.log(
      `circumference is equal ${Number(
        L.toFixed(2)
      )}, circle area is equal ${Number(S.toFixed(2))}`
    );
  }
  return console.log("You entered incorrect data");
}
export default calc;
