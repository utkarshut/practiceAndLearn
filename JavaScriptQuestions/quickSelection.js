nums = [7,4,3,5,2,1,6];

function quickSort(left,right,nums){
    if(left>=right)return;
    let pivot = nums[right];
    let p = left;
    // p start from left i.e. 0 for eg
    // move everything left to boundary p and then swap p to pivot
    for(let i=left; i< right;i++){
       if(nums[i]<pivot){
        [nums[i],nums[p]] = [nums[p],nums[i]];
        p++;
       }
    }
    [nums[p],nums[right]] = [nums[right],nums[p]];
    quickSort(left,p-1,nums);
    quickSort(p+1,right,nums);
}
quickSort(0,6,nums);
console.log(nums);