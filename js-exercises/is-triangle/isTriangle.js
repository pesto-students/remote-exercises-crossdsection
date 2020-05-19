function isTriangle(...sidesArray) {
  const check1 = (sidesArray[0] < sidesArray[1] + sidesArray[2]);
  const check2 = (sidesArray[2] < sidesArray[0] + sidesArray[1]);
  const check3 = (sidesArray[1] < sidesArray[2] + sidesArray[0]);
  const isTriangleBool = (check1 && check2 && check3);
  return (sidesArray.length === 3 && isTriangleBool);
}

export {
  isTriangle,
};
