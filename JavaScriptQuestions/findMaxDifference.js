function findMaxDifference(nums){
let min = nums[0]; max = nums[1]- nums[0];
for (let i =1 ; i < nums.length ; i++){
    max =  Math.max(max, nums[i] - min);
    min =  Math.min(min,nums[i]);
}
console.log(max)
}
findMaxDifference([2, 3, 10, 6, 4, 8, 1])