function pif(a, b, c) {
  function mult(p1, p2) {
    return p1 ** 2 + p2 ** 2;
  }
  if (c ** 2 === mult(a, b) || b ** 2 === mult(a, c) || a ** 2 === mult(c, b)) {
    return true;
  }
  return false;
}

export default pif;
