const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

function balancedBraces(string) {
  const characters = string.split('').reverse();
  const braceObj = {
    '}': '{',
    ')': '(',
    ']': '[',
  };
  const openingBraces = Object.values(braceObj);
  const allBraces = openingBraces.concat(Object.keys(braceObj));
  const stack = [];
  for (const character of characters) {
    if (openingBraces.includes(character) && character === stack[stack.length - 1]) {
      stack.pop();
    } else if (allBraces.includes(character)) {
      const openingBrace = hasOwn(braceObj, character) ? braceObj[character] : character;
      stack.push(openingBrace);
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
