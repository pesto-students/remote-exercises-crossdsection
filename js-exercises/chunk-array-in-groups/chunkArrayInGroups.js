const chunkArrayInGroups = (array, chunkSize) => {
  const arrayLength = array.length;
  const groupedArray = [];
  let index = 0;
  while (index < arrayLength) {
    if (index + chunkSize < arrayLength) {
      groupedArray.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    } else {
      groupedArray.push(array.slice(index));
      break;
    }
  }
  return groupedArray;
};

export {
  chunkArrayInGroups,
};
