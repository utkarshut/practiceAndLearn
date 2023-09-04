function maximumSubArray(nums){
let res = nums[0] ;
let maxEnding = nums[0];
for (let i = 1 ; i < nums.length; i++){
    maxEnding = Math.max(nums[i], nums[i]+maxEnding);
   res = Math.max(res, maxEnding); 
}
console.log(res);
}
maximumSubArray([-3,8,-2,4,-5,6])