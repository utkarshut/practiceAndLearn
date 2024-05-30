var obj = {
  name: "Utkarsh Bhardwaj",
  age: 20,
  address: ["Bettiah", "845438"],
  company: {
    parent: "LTTS",
    secondary: "Halliburton",
  },
};
console.log(obj, JSON.stringify(obj));

Object.prototype.myStringify = function(){
    const obj = this;
  let res = "{";
  for (items in obj) {
    let eachEntry = obj[items];
    if (typeof eachEntry == "number") {
      res += `,"${items}":${eachEntry}`;
    } else if (typeof eachEntry == "string") {
      res += `,"${items}":"${eachEntry}"`;
    } else if (typeof eachEntry == "object" && Array.isArray(eachEntry)) {
      let arrayContent = "[";
      for (item in eachEntry) {
        arrayContent += `"${item}",`;
      }
      arrayContent = arrayContent.substring(0, arrayContent.length - 1);
      arrayContent += "]";
      res += `,"${items}":${arrayContent}`;
    }  else if (typeof eachEntry === 'object' && eachEntry !== null) {
        res += `,"${items}":${eachEntry.myStringify()}`;
      }
  }
  res = '{'+res.substring(2);
  res += "}";
  return res;
};
const data = obj.myStringify();
console.log(data)

// TO BUILD JSON stringify
// const mystrigify = (obj)=>{}
// JSON.mystrigify = mystrigify


// DEEP COPY OBJECT
