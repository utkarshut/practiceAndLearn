// function moveZero(nums){
//   let count = 0; 
//   for(let i=0;i<nums.length;i++){
//     if(nums[i] !== 0){
//         [nums[count],nums[i]] = [nums[i],nums[count]];
//         count++;
//     }
//   }
//   console.log(nums);
// }

console.log(moveZero([10,23,0,0,0,12,3,0,0,12,0]))

function moveZero(nums){
    let left = 0;
    let right =0;
    while(right < nums.length){
      if(nums[right] !==0){
        nums[left] = nums[right];
        left++;
      }
      right++;
    }
    while(left<nums.length){
      nums[left]=0;
      left++;
    }
    return nums;
}