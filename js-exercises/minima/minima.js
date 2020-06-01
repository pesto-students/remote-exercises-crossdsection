// Proof - https://jsben.ch/wOpis

function minima(k, array) {
  const arrLen = array.length;
  for (let i = 0; i < arrLen; i += 1) {
    let min = i;
    for (let j = i + 1; j < arrLen; j += 1) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
    if ((i + 1) === k) {
      return array.slice(0, k);
    }
  }
  return array;
}

export { minima };
