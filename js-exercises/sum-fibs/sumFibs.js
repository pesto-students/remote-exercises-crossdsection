function sumFibs( received ) {
  let first = 1;
  let second = 1;
  let sum = first;
  do {
    if( second % 2 != 0 ){
      sum += second;
    }
    let temp = second;
    second = first + second;
    first = temp;
  } while( second <= received );
  return sum;
}

export {
  sumFibs,
};
