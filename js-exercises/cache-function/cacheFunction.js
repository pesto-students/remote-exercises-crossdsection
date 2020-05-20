function cacheFunction(mockFn) {
  const cacheObject = {};
  return function (...mockArgs) {
    const mockArgIndex = mockArgs.join('_');
    if (!(mockArgIndex in cacheObject)) {
      cacheObject[mockArgIndex] = mockFn(...mockArgs);
    }
    return cacheObject[mockArgIndex];
  };
}

export {
  cacheFunction,
};
