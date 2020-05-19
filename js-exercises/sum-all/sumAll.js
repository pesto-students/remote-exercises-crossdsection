function sumAll() {
  if( arguments[0][0] > arguments[0][1] ){
    let tmp = arguments[0][0];
    arguments[0][0] = arguments[0][1];
    arguments[0][1] = tmp;
  }

  let [initial,end] = arguments[0];
  let sum = 0;

  do {
    sum += initial;
    initial++;
  } while( initial <= end );
  return sum;
}

export {
  sumAll,
};
