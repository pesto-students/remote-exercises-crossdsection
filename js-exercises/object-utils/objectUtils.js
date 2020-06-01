const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

const checkExistingKey = (obj, key, value) => {
  if (hasOwn(obj, key) && Array.isArray(obj[key])) {
    obj[key].push(value);
  } else if (hasOwn(obj, key)) {
    obj[key] = [obj[key], value];
  } else {
    obj[key] = value;
  }
  return obj;
};

const modifyObject = (obj, key, value) => {
  if (Array.isArray(key)) {
    for (const entry of key) {
      obj = checkExistingKey(obj, entry, value);
    }
  } else if (typeof key === 'object' && key !== null) {
    obj = checkExistingKey(obj, JSON.stringify(key), value);
  } else {
    obj = checkExistingKey(obj, key, value);
  }
  return obj;
};

function map(obj, callback) {
  let newObject = {};
  for (const [key, value] of Object.entries(obj)) {
    const [newKey, newValue] = callback([key, value]);
    newObject = modifyObject(newObject, newKey, newValue);
  }
  return newObject;
}

function filter(obj, callback) {
  let newObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (callback([key, value])) {
      newObject = modifyObject(newObject, key, value);
    }
  }
  return newObject;
}

const invert = (obj) => map(obj, ([key, value]) => [value, key]);

function merge(...args) {
  let newObject = {};
  for (const obj of args) {
    for (const [key, value] of Object.entries(obj)) {
      newObject = modifyObject(newObject, key, value);
    }
  }
  return newObject;
}

function all(obj, callback) {
  for (const [key, value] of Object.entries(obj)) {
    if (!callback([key, value])) {
      return false;
    }
  }
  return true;
}

function some(obj, callback) {
  for (const [key, value] of Object.entries(obj)) {
    if (callback([key, value])) {
      return true;
    }
  }
  return false;
}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
