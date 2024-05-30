function minimumConsecutiveFlips(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
        if(nums[i] !== nums[0]){
            console.log(`flip ${nums[i]} from ${i}`);
        }else{
            console.log(`to  ${i-1}`);
        }
    }
  }
}
minimumConsecutiveFlips([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]);

// IF first and last are same then we only need to flip middle
// ELse if fist last different then equal number of time flips for both 0 and 1