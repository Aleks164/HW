function eqOfSecDeg() {
  const numbers = window.prompt(
    "Please enter the numbers in the format a, b, c in the input field",
    "2,3,4"
  );
  let firstDecision;
  let secondDecision;

  if (numbers !== null && numbers !== "") {
    const [a, b, c] = numbers.split(",");
    let D = b ** 2 - 4 * a * c;

    const typeofabc =
      typeof Number(a) === "number" &&
      typeof Number(b) === "number" &&
      typeof Number(c) === "number";
    const isNanabc =
      String(a) !== "undefined" &&
      String(b) !== "undefined" &&
      String(c) !== "undefined";
    if (typeofabc && isNanabc) {
      if (Number(a) !== 0) {
        if (D >= 0) {
          firstDecision = (-b + D ** (1 / 2)) / (2 * a);
          firstDecision = Number(firstDecision.toFixed(2));
          secondDecision = (-b - D ** (1 / 2)) / (2 * a);
          secondDecision = Number(secondDecision.toFixed(2));
        } else {
          D = Math.abs(D);
          let fixD = D ** (1 / 2);
          fixD = Number(fixD.toFixed(2));
          if (Number(b) !== 0) {
            firstDecision = `(${-b}+i${fixD})/${2 * a}`;
            secondDecision = `(${-b}-i${fixD})/${2 * a}`;
          } else {
            firstDecision = `(i${fixD})/${2 * a}`;
            secondDecision = `(-i${fixD})/${2 * a}`;
          }
        }
        return console.log(firstDecision, secondDecision);
      }
      if (Number(a) === 0) {
        console.log("it isn't a equation of the second degree");
      }
    } else {
      console.log("you have entered wrong data");
    }
  } else {
    console.log("you have not entered anything");
  }
}

export default eqOfSecDeg;
