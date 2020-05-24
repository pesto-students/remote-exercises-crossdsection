function sumAll([lowerBound, upperBound]) {
  if (lowerBound > upperBound) {
    const tmp = lowerBound;
    lowerBound = upperBound;
    upperBound = tmp;
  }
  let sum = 0;
  for (lowerBound; lowerBound <= upperBound; lowerBound++) {
    sum += lowerBound;
  }
  return sum;
}

export {
  sumAll,
};
