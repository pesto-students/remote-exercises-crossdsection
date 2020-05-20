function cacheFunction(passedFn) {
  const cacheObject = {};
  return function (...passedArgs) {
    const passedArgIndex = passedArgs.join('_');
    if (!cacheObject.hasOwnProperty(passedArgIndex)) {
      cacheObject[passedArgIndex] = passedFn(...passedArgs);
    }
    return cacheObject[passedArgIndex];
  };
}

export {
  cacheFunction,
};
