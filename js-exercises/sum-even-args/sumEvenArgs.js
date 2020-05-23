const sumEvenArgs = (...args) => {
  let sum = 0;
  for (const value of args) {
    if (value % 2 === 0) {
      sum += value;
    }
  }
  return sum;
};

export { sumEvenArgs };
