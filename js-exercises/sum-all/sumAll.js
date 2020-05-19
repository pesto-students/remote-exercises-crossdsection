function sumAll( [initial,end] ) {
  if( initial > end ){
    let tmp = initial;
    initial = end;
    end = tmp;
  }
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
