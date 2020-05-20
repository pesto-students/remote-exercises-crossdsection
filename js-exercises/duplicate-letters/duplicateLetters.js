function duplicateLetters( text ) {
  const objDuplicateCount = {};
  let maxDuplicateCount = 0;
  const stringArray = text.split('');
  for (let i = 0; i < stringArray.length; i++) {
    if( objDuplicateCount[ stringArray[i] ] == null ) {
      objDuplicateCount[ stringArray[i] ] = 0;
    }
    objDuplicateCount[ stringArray[i] ]++;
    if ( objDuplicateCount[ stringArray[i] ] > 1 && objDuplicateCount[ stringArray[i] ] > maxDuplicateCount ) {
      maxDuplicateCount = objDuplicateCount[ stringArray[i] ];
    }
  }
  if ( maxDuplicateCount > 0 ) {
    return maxDuplicateCount; 
  } else {
    return false; 
  }
}

export {
  duplicateLetters,
};
