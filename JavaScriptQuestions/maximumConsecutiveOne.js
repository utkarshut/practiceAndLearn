function maximumConsecutiveOnes(nums) {
  let res = 0;
  curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr++;
      res = Math.max(res, curr);
    } else {
      curr = 0;
    }
  }
  console.log(res);
}

maximumConsecutiveOnes([0, 1, 1, 0, 1, 1, 1]);
