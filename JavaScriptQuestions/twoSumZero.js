twoSumZero([-5, -4, -3, 0, 1, 3, 4, 8]);
function twoSumZero(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === 0) {
      console.log([left, right]);
      return;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
