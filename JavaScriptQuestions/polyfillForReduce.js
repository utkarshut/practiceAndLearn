const nums = [1, 2, 3, 5, 6, 7, 8, 9, 0];
/**
 * Function to accumulater object with odd even value
 * @param {*} accumulator 
 * @param {*} currentValue 
 * @param {*} index 
 * @param {*} nums 
 * @returns 
 */
const oddEvenAccumulator = function (accumulator, currentValue, index, nums) {
  accumulator[currentValue] = currentValue % 2 === 0 ? "Odd" : "Even";
  return accumulator;
};
const reducedData = nums.reduce(oddEvenAccumulator);

console.log(reducedData);

Array.prototype.myReduce = function (callbackFunction, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if(accumulator !== undefined){
        callbackFunction.call(this, accumulator, this[i], i , this);
    } else{
        // => In case of reduce if there dont have initial value it will return the first value from array
        accumulator = this[i];
    }
  }
  return accumulator;
};

const myReducedData = nums.myReduce(oddEvenAccumulator, {});

console.log(myReducedData);
