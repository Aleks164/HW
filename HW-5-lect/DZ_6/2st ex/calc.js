const isWord = function (string) {
  if (typeof string === 'string') {
    const checkString = string.split(' ');
    if (checkString.length == 1) {
      return true;
    }
    return false;
  }
  return false;
};

module.exports = isWord;
