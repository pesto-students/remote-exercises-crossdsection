function isTriangle() {
  let triangleFound = false;
  let sidesArray = Array.from(arguments);
  
  Array.prototype.checkGreater = function (i,j,k ){
    if( this[i] < this[j] + this[k] ){
      return true;
    }
    return false;
  }

  if( sidesArray.length == 3 && (sidesArray.checkGreater(0,1,2) && sidesArray.checkGreater(1,2,0) && sidesArray.checkGreater(0,2,1)) ){
    triangleFound = true;
  } 
  return triangleFound;
}

export {
  isTriangle,
};
