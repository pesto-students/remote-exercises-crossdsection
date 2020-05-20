function cacheFunction(mockFn) {
  const cacheObject = {};
  return function (mockArg) {
    if (!(mockArg in cacheObject)) {
      cacheObject[mockArg] = mockFn(mockArg);
    }
    return cacheObject[mockArg];
  };
}

export {
  cacheFunction,
};
