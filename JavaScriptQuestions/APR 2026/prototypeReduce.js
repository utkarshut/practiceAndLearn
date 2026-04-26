const array = [1, 2, 3, 4];


Array.prototype.myReduce = function (callBackFn, initialValue) {
  const arr = this;

  let i = 0;
  let prev;

  // handle initialValue
  if (initialValue !== undefined) {
    prev = initialValue;
  } else {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    prev = arr[0];
    i = 1;
  }

  for (; i < arr.length; i++) {
    prev = callBackFn(prev, arr[i], i, arr);
  }

  return prev;
};
const sum = array.myReduce((prev,curr,index,array)=>{
    return prev + curr;
},5)
console.log(sum);