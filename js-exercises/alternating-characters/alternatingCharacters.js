function computeMinDeletion(alphabets) {
  let uniqueAlphabet;
  let count = 0;
  for (const alphabet of alphabets) {
    if (uniqueAlphabet === alphabet) {
      count += 1;
    } else {
      uniqueAlphabet = alphabet;
    }
  }
  return count;
}

function alternatingCharacters(arr) {
  const minDeletion = [];
  for (const string of arr) {
    minDeletion.push(computeMinDeletion(string.split('')));
  }
  return minDeletion;
}

export { alternatingCharacters };
