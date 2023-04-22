// function that will return function that call only once irrespective number of time it is called
var once = function (func) {
  var result;

  return function () {
    if (func) {
      result = func.apply(this, arguments);
      // make function null so it can never be called again
      func = null;
    }

    return result;
  };
};
var counter = 0;
const num = once(function () {
  counter++;
  console.log(counter);
});

num();
num();
