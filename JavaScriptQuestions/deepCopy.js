// Test cases
const obj = {
  a: 1,
  b: { c: 2, d: 3 },
  e: [4, 5, 6],
  f: new Date(),
};
obj.circular = obj; // Adding circular reference

const deepCopy = (value,map = new Map()) => {

  if (typeof value !== "object" || value === null) {
    return value;
  }
  if (value instanceof Date) {
    return new Date(value);
  }
  if(map.get(value)){
    return map.get(value);
  }
  const objectCopy = {};
  map.set(value, objectCopy);
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
        console.log(value[key])
      objectCopy[key] = deepCopy(value[key], map);
    }
  }
  return objectCopy;

};

const copiedObj = deepCopy(obj);
console.log(copiedObj);
console.log(copiedObj.circular === copiedObj); // Should be true

// Verifying that changes to the copy do not affect the original
copiedObj.b.c = 42;
console.log(obj.b.c); // Should still be 2
