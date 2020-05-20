const limitFunctionCallCount = (funcDescription, callsAllowed) => {
  let callCount = 0;
  return function (...args) {
    callCount += 1;
    return (callCount <= callsAllowed) ? funcDescription(...args) : null;
  };
};

export {
  limitFunctionCallCount,
};
