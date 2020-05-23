const diffArray = (array1, array2) => array1.concat(array2).filter(
  value => !(array1.includes(value) && array2.includes(value)),
);

export {
  diffArray,
};
