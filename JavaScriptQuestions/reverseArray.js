function reverseArray(nums){
 // in case of updating same array check while loop

 let low = 0 ; let high = nums.length-1;
  while(low < high){
    temp = nums[low];
    nums[low] = nums[high];
    nums[high] = temp;
    low++;
    high--;
  }
  return nums;
}

console.log(reverseArray([1,2,4,5,6]))

