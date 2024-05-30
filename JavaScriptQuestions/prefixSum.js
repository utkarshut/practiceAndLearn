let prefixSum = [];
let sum = 0;
function prefixSumMethod(nums) {
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }
  console.log(prefixSum);
}
prefixSumMethod([10, 30, 40, 45, 60]);
function getSum(start, end) {
  console.log(prefixSum[end] - prefixSum[start]);
}
// get sum of 0 to 3 index
getSum(0, 3);
getSum(1, 3);
