function isPrime(n){
  for( var i = 2; i <= Math.sqrt(n); i++ ){
    if( n % i == 0 ){
      return false;
    }
  }
  return true;
}

function sumPrimes() {
  let received = arguments[0];

  let sum = 0;
  for( var j = 2; j <= received; j++ ){
    if( isPrime(j) ){
      sum += j;
    }
  }
  
  return sum;
}

export {
  sumPrimes,
};
