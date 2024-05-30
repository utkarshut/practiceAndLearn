threeSumTarget([-5, ,4,-4, -3, 0, 1, 3, 4, 8],8);

function threeSumTarget(nums, target) {
 nums.sort((a,b)=>{return a-b});
 console.log(nums)
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      console.log([left, right]);
      return;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}
