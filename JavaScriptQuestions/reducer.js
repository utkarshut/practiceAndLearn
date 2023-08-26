function reduceCheck(nums) {
  const reduceOutput = nums.reduce(
    (accumlator, current, index, originalArray) => {
      if (accumlator[current]) {
        accumlator[current] += 1;
      } else {
        accumlator[current] = 1;
      }
      return accumlator;
    },
    {}
  ); // INITIALISE with {}
  console.log(reduceOutput);
}

reduceCheck([1, 2, 4, 1, 4, 5, 6, 7]);
