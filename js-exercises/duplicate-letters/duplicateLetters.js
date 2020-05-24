function duplicateLetters(text) {
  const frequency = {};
  let maxFrequency = 0;
  const alphabets = text.split('');
  for (const alphabet of alphabets) {
    if (frequency[alphabet] == null) {
      frequency[alphabet] = 0;
    }
    frequency[alphabet] += 1;
    if (frequency[alphabet] > 1 && frequency[alphabet] > maxFrequency) {
      maxFrequency = frequency[alphabet];
    }
  }
  return (maxFrequency > 0) ? maxFrequency : false;
}

export {
  duplicateLetters,
};
