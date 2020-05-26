const chunkArrayInGroups = (array, chunkSize) => {
  const arrayLength = array.length;
  const groupedArray = [];
  let index = 0;
  while (index < arrayLength) {
    groupedArray.push(array.slice(index, index += chunkSize));
  }
  return groupedArray;
};

export {
  chunkArrayInGroups,
};
