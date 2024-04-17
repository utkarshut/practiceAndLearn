/**
 * If function has prefix sum and suffix sum are equal
 * @param {*} nums
 */
function checkEquilibirium(nums) {
  let prefixSum = [nums[0]];
  let suffixSum = [nums[nums.length - 1]];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = nums[i] + prefixSum[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixSum[nums.length - 1 - i] =
      nums[i] + suffixSum[nums.length - 1 - i - 1];
  }
  suffixSum = suffixSum.reverse();
  console.log(prefixSum, suffixSum);
  for (let i = 0; i < nums.length; i++) {
    if (prefixSum[i - 1] === suffixSum[i + 1]) {
      console.log("equillibirum at ", i);
    }
  }
}
checkEquilibirium([3, 4, 8, -9, 9, 7]);
// SUFFIX SUM [22,19,15,7,16,7]
checkEquilibirium([5, 2, 2, 4, 3, 4, 2]);

function checkEquilibiriumUsingEfficient(nums){
   const length = nums.length;
   let rSum = 0;  // RIGHT SUM
   for(let i=0; i < length; i++){
     rSum += nums[i];
   }
   let lSum = 0; // LEFT SUM
   for(let i=0; i < length; i++){
    rSum -= nums[i];
    if(lSum === rSum){
        console.log("equillibirum  using efficient at ", i ,"for NUM:", nums[i]);
    } else{
        lSum += nums[i];
    }
   }
   //console.log("NO EQUILIBIRIUM FOUND");
}
checkEquilibiriumUsingEfficient([3, 4, 8, -9, 9, 7]);
