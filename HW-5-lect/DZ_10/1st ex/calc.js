function regExp() {
  const data = window.prompt(
    "imput date with format dd.mm.yyyy, email adress or telephon number",
    "132"
  );
  const dateRegExp = /^\d\d\.\d\d\.\d\d\d\d$/;
  const testDate = dateRegExp.test(data);
  const numberRegExp = /[\d\-\+][\-\d{1,10}]{1,10}/g;
  const testNumber = numberRegExp.test(data);
  const matchNumber = data.match(numberRegExp);
  const emailRegExp = /[-.\w]+@([\w-]+\.)+[\w]{2,5}/g;
  const testEmail = emailRegExp.test(data);
  if (testDate) {
    return console.log(`${data} it is date`);
  }
  if (testNumber) {
    const resultNumber = matchNumber.join("");
    if (resultNumber.length === 11) {
      return console.log(`${data} it is telephon number`);
    }
    return console.log(`${data} it is wrong telephon number`);
  }
  if (testEmail) {
    return console.log(`${data} it is email`);
  }
  return console.log(`${data} is neither a phone nor a mail nor a date`);
}

export default regExp;
