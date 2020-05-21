function flipped(func) {
  return function () {
    return func(...Array.from(arguments).reverse());
  };
}

export {
  flipped,
};
