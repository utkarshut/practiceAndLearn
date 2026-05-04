nums = [2, 1, -1, 5, -2, 3];
k = 3;

// sum[i]... sum[j] == k

let map = new Map();
let sum = 0;
let max =0;
map.set(0, -1);
for (let num = 0; num < nums.length; num++) {
  sum += nums[num];
  if (!map.has(sum)) {
    map.set(sum, num);
  }
  if(map.has(sum-k)){
    max = Math.max(max, num - map.get(sum-k))
  }
}
console.log(max);
