
function duplicateLetters(...args) {
  let objDuplicateCount = {};
  let maxDuplicateCount = 0;
  let stringArray = args[0].split("");
  for( var i = 0; i < stringArray.length; i++ ){
    if( objDuplicateCount[ stringArray[i] ] == null ){
      objDuplicateCount[ stringArray[i] ] = 0;
    }
    objDuplicateCount[ stringArray[i] ]++;
    if( objDuplicateCount[ stringArray[i] ] > 1 && objDuplicateCount[ stringArray[i] ]> maxDuplicateCount ){
      maxDuplicateCount = objDuplicateCount[ stringArray[i] ];
    }
  }
  if( maxDuplicateCount > 0 ){
    return maxDuplicateCount; 
  } else {
    return false; 
  }
}

export {
  duplicateLetters,
};
