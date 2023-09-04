function moveZero(nums){
  let count = 0; 
  for(let i=0;i<nums.length;i++){
    if(nums[i] !== 0){
        [nums[count],nums[i]] = [nums[i],nums[count]];
        count++;
    }
  }
  console.log(nums);
}

moveZero([10,23,0,0,0,12,3,0,0,12,0])