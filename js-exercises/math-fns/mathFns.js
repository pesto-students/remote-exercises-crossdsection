// Don't change the export values.
// You can use the function in the Math module
function sqrt(valueReceived) {
  return Math.sqrt(valueReceived);
}

function power(valueReceived, times) {
  return valueReceived ** times;
}

function round(valueReceived) {
  return Math.round(valueReceived);
}

export {
  sqrt,
  power,
  round,
};
