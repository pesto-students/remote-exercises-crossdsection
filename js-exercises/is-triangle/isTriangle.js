function isTriangle(...sidesArray) {
  let isTriangleBool = (( sidesArray[0] < sidesArray[1] + sidesArray[2] ) && ( sidesArray[1] < sidesArray[2] + sidesArray[0] ) && ( sidesArray[2] < sidesArray[0] + sidesArray[1] ));
  if( sidesArray.length == 3 && isTriangleBool ){
    return true;
  } 
  return false;
}

export {
  isTriangle,
};
