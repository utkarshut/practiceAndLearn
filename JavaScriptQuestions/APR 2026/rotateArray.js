
const nums = [1,2,3,4,5,6,7];

function rotateArrayByK(nums,k){
     let res = new Array(nums.length);
      k = k % nums.length;
     for(let i=0; i< nums.length; i++){      
     let newIndex = (i+k)%nums.length;
        res[newIndex] = nums[i];
     }
     console.log(res);
}

rotateArrayByK(nums,3);