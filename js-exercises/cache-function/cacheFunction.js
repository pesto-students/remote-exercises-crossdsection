function cacheFunction(fn) {
  const cacheObject = {};
  return function (...args) {
    const passedArgIndex = args.join('_');
    if (!cacheObject.hasOwnProperty(passedArgIndex)) {
      cacheObject[passedArgIndex] = fn(...args);
    }
    return cacheObject[passedArgIndex];
  };
}

export {
  cacheFunction,
};
