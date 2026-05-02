const nums = [10, 5, 8];

function secondLargest(nums){
    let max = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0; i< nums.length; i++){
        if(nums[i]>max){
           secondLargest = max;   // 👈 shift old max
            max = nums[i];
        }
        if(nums[i]> secondLargest && nums[i] != max){
            secondLargest = nums[i];
        }
    }
    console.log(max,secondLargest);
}
secondLargest(nums);