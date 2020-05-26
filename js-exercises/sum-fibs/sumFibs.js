function sumFibs(upperBound) {
  let lowerFib = 1;
  let nextFib = 1;
  let sum = lowerFib;
  do {
    if (nextFib % 2 !== 0) {
      sum += nextFib;
    }
    const temp = nextFib;
    nextFib = lowerFib + nextFib;
    lowerFib = temp;
  } while (nextFib <= upperBound);
  return sum;
}

export {
  sumFibs,
};
