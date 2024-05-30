function maximumEvenOddSubArray(nums){
  let res = 0 ; count = 1;
  for(let i = 1 ; i < nums.length ; i++){
     if(nums[i] % 2 === 0 && nums[i-1]%2 !== 0  ||
        nums[i] % 2 !== 0 && nums[i-1]%2 === 0){
            count ++;
        }else{
            count = 1
        }
       res = Math.max(res, count);
  }
  console.log(res);
}
maximumEvenOddSubArray([5,10,20,6,3,8])