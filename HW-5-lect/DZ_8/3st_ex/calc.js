function calc(firstdate, seconddate) {
  const [day, month, year] = firstdate.split(".");
  const [day2, month2, year2] = seconddate.split(".");

  const newfirstDate = new Date(year, month - 1, day);
  const newsecondDate = new Date(year2, month2 - 1, day2);
  function checkFirstDate() {
    return (
      newfirstDate.getMonth() === Number(month - 1) &&
      newfirstDate.getDate() === Number(day) &&
      newfirstDate.getFullYear() === Number(year)
    );
  }

  function checkSecondtDate() {
    return (
      newsecondDate.getMonth() === Number(month2 - 1) &&
      newsecondDate.getDate() === Number(day2) &&
      newsecondDate.getFullYear() === Number(year2)
    );
  }

  const checkAll =
    newfirstDate !== "Invalid Date" &&
    newsecondDate !== "Invalid Date" &&
    checkFirstDate() &&
    checkSecondtDate();

  if (!checkAll) {
    console.log("wrong date");
  } else {
    console.log(
      newfirstDate < newsecondDate ? "first is older" : "second is older"
    );
  }
}
export default calc;
