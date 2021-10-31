function calc() {
  const date = window.prompt(
    "Pelease input date format with dd.mm.yyyy in the input field",
    "30.10.2021"
  );
  const [day, month, year] = date.split(".");
  const newDate = new Date(year, month - 1, day);
  const dayOfWeek = newDate.toLocaleString("default", { weekday: "long" });
  function checkDate() {
    return (
      newDate.getMonth() == month - 1 &&
      newDate.getDate() == day &&
      newDate.getFullYear() == year
    );
  }
  const checkAll = newDate !== "Invalid Date" && checkDate();

  if (!checkAll) {
    console.log("wrong date");
  } else {
    console.log(dayOfWeek);
  }
}
export default calc;
