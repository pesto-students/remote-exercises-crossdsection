function longestWordInString(sentence) {
  let longestWord = '';
  if (sentence != null) {
    const alphabets = sentence.split('');
    const delimeters = [' ', '\t', '\n', ',', '.']; // To break words
    let wordLength = 0;
    for (let index = 0, startIndex = 0; index < alphabets.length; index++) {
      if (delimeters.indexOf(alphabets[index]) !== -1 || alphabets[index + 1] == null) {
        const word = sentence.substring(startIndex, index).trim();
        if (word.length > wordLength) {
          longestWord = word;
          wordLength = word.length;
        }
        startIndex = index + 1;
      }
    }
  }
  return longestWord;
}

export { longestWordInString };
