function isPrime(num) {
  for (let value = 2; value <= Math.sqrt(num); value++) {
    if (num % value === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(received) {
  let sum = 0;
  for (let value = 2; value <= received; value++) {
    if (isPrime(value)) {
      sum += value;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
