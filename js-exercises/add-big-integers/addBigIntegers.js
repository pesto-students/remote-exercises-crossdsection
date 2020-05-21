function generateReverseArray(num) {
  return num.split('').reverse();
}

function addDigits(indexToAdd, numberMap, carryForward) {
  let sum = parseInt(carryForward, 10);
  for (let index = 0; index < numberMap.length; index++) {
    if (numberMap[index][indexToAdd] !== undefined) {
      sum += parseInt(numberMap[index][indexToAdd], 10);
    }
  }
  return [
    sum % 10,
    Math.floor(sum / 10),
  ];
}

function addBigIntegers(intString) {
  const numberMap = intString.split('\n');
  let biggestNumberSize = 0;
  for (let index = 0; index < numberMap.length; index++) {
    numberMap[index] = generateReverseArray(numberMap[index]);
    if (numberMap[index].length > biggestNumberSize) {
      biggestNumberSize = numberMap[index].length;
    }
  }
  const reverseDigitizedTotal = [];
  let digit = 0;
  let carryForward = 0;
  let indexToAdd = 0;
  while (indexToAdd < biggestNumberSize) {
    [digit, carryForward] = addDigits(indexToAdd, numberMap, carryForward);
    reverseDigitizedTotal.push(digit);
    indexToAdd += 1;
  }
  if (carryForward > 0) {
    reverseDigitizedTotal.push(carryForward);
  }
  return reverseDigitizedTotal.reverse().join('');
}

export { addBigIntegers };
