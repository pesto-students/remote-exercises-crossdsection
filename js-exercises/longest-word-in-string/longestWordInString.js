function longestWordInString(sentence) {
  let longestWord = '';
  if (sentence != null) {
    const words = sentence.split(/\s|\n|,|\./);
    let wordLength = 0;
    for (const word of words) {
      if (word.length > wordLength) {
        longestWord = word;
        wordLength = word.length;
      }
    }
  }
  return longestWord;
}

export { longestWordInString };
