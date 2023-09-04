function leaderInArray(nums) {
  let currenLeader;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      console.log(nums[i]);
      currenLeader = nums[i];
    } else {
      if (nums[i] > currenLeader) {
        console.log(nums[i]);
        currenLeader = nums[i];
      }
    }
  }
}

leaderInArray([7, 10, 4, 10, 6, 5, 2])