function reverseArrayByDplace(nums, d) {
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(nums[i]);
  }
  for(let i = d ; i<nums.length;i++){
    nums[i-d] = nums[i];
  }
  for(let i = 0; i < d; i++){
    nums[nums.length-d+i] = temp[i];
  }
  console.log(nums);
}
function reverseArrayByDplaceByReverse(nums, d) {
    nums = reverseArray(nums,0,d-1);
    nums = reverseArray(nums, d, nums.length-1);
    nums =  reverseArray(nums,0, nums.length-1);
  }

  function reverseArray(nums, low , high){
    //  let high = nums.length - 1;
    //  let low = 0;
     while(low < high){
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low ++;
        high --;
     }
     console.log(nums);
     return nums;
  }

reverseArrayByDplace([1,2,3,4,5,6,7],3);
reverseArrayByDplaceByReverse([1,2,3,4,5,6,7],3);
reverseArray([1,2,3,4,5])
