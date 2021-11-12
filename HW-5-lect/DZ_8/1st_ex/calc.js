function calc() {
  const date = window.prompt(
    "Pelease input date format with dd.mm.yyyy in the input field",
    "30.10.2021"
  );
  const [day, month, year] = date.split(".");
  const newDate = new Date(year, month - 1, day);
  const dayOfWeek = newDate.toLocaleString("en-US", { weekday: "long" });
  function checkDate() {
    return (
      newDate.getMonth() === Number(month - 1) &&
      newDate.getDate() === Number(day) &&
      newDate.getFullYear() === Number(year)
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
