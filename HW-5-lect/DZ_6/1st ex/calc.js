function diff(a, b) {
  let result;
  if (a < b) {
    result = b - a;
    return result;
  }

  result = a - b;
  return result;
}

export default diff;
