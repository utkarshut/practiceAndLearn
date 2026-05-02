const nums = [1,3,4,5,1,2,2,2,2];
let set = new Set();
let left = 0;
let right = 0;
while(right<nums.length){
    if(!set.has(nums[right])){
        set.add(nums[right]);
        nums[left]= nums[right];
        left++;
    }
    right++;
}
console.log(nums.slice(0,left));
