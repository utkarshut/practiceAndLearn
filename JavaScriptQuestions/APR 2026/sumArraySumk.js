nums = [1, 1, 1]
k = 2

// store summ
// You are finding how many times a valid starting point occurred before

let sum = 0;
let count = 0;
let map = new Map();
map.set(0,1);
for(let i=0; i< nums.length; i++){
    sum += nums[i];
   if(map.has(sum - k)){
     count += map.get(sum-k);
   }
   map.set(sum,(map.get(sum) || 0) + 1);
}
console.log(count)