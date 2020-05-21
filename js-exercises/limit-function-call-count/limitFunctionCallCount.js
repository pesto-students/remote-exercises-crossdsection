const limitFunctionCallCount = (fn, callsAllowed) => {
  let callCount = 0;
  return function (...args) {
    callCount += 1;
    return (callCount <= callsAllowed) ? fn(...args) : null;
  };
};

export {
  limitFunctionCallCount,
};
