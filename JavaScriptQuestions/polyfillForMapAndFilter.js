function square(num) {
  return num * num;
}

const nums = [1, 2, 3, 4, 5];

const squareNums = nums.map(square);

console.log("ORIGINAL MAP ==>",squareNums);

Array.prototype.myMap = function (callbackFunction) {
  // this ==> nums
  var mappedArray = [];
  // for (let i = 0; i < this.length; i++){
  //     mappedArray.push(callbackFunction(this[i],i,this));
  // }
  this.forEach((num, i) => {
    // ==> Here added i and this to callback function as original map accept (currentValue, index, originalArray)
    mappedArray.push(callbackFunction(num, i, this));
  });
  return mappedArray;
};
console.log("CUSTOM MAP ==>",nums.myMap(square));

console.log("ORIGINAL FILTER ==>",nums.filter((f) => f % 2 === 0));

Array.prototype.myFilter = function (callbackFunction) {
  const filteredArray = [];
  this.forEach((element, i) => {
    // ===> check if callback function return true for pushing it in filered data
    // if (callbackFunction(element, i, this)) filteredArray.push(element);
    if (callbackFunction.call(this, element, i, this)) filteredArray.push(element);
  });
  return filteredArray;
};

console.log("CUSTOM FILTER ==>",nums.myFilter((f) => f % 2 === 0));
// NOTE -> function call accepts first param as this to bind next param will be argument
// call(thisArg, arg1, /* …, */ argN)
const fn = (f) => f % 2 === 0;
console.log(fn.call(this,10))