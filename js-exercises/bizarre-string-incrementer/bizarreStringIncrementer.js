const isEmpty = (value) => typeof value === 'undefined' || value === null || value === false;
const isNumeric = (value) => !isEmpty(value) && !Number.isNaN(Number(value));

function addDigits(digit1, digit2) {
  const sum = digit1 + digit2;
  return [
    sum % 10,
    Math.floor(sum / 10),
  ];
}

function bizarreStringIncrementer(string) {
  const characters = string.split('').reverse();
  let addBy = 1;
  let i;
  for (i = 0; i < characters.length; i += 1) {
    if (isNumeric(characters[i])) {
      [characters[i], addBy] = addDigits(parseInt(characters[i], 10), addBy);
    } else {
      break;
    }
  }
  if (addBy !== 0) {
    characters.splice(i, 0, addBy);
  }
  return characters.reverse().join('');
}

export {
  bizarreStringIncrementer,
};
