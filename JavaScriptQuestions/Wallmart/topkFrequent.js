let nums = [1, 1, 1, 2, 2, 3];
// k = 2 o/p [1,2]
let arr;
let map = new Map();
function topK(nums, k) {
  let res = new Array();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }
  arr = Array.from(map.entries());
  quickSelection(arr, 0, arr.length - 1, arr.length - k);

  // let bucket = new Array(nums.length);
  // for (let [num, frequency] of map.entries()) {
  //   if (!bucket[frequency]) {
  //     bucket[frequency] = [];
  //   }
  //   bucket[frequency].push(num);
  // }
  // for (i = nums.length - 1; i >= 0; i--) {
  //   if (bucket[i]) {
  //     res = res.concat(...bucket[i]);
  //     if (res.length == k) {
  //       console.log(res);
  //     }
  //   }
  // }
  // console.log(bucket, res);
}

function quickSelection(nums, left, right, target) {
  if (left >= right) return;
  let pivot = nums[right][1];
  let p = left;
  for (let i = left; i <= right; i++) {
    if (nums[i][1] < pivot) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  }
  [nums[p], nums[right]] = [nums[right], nums[p]];
  // we use quick select so only move to half which will be needed if we do all then become quick sort
  if (p == target) return;
  else if (p < target) quickSelection(nums, p + 1, right, target);
  else quickSelection(nums, left, p - 1, target);
}
// we use quick select so only move to half which will be needed if we do all then become quick sort
topK(nums, 2);
console.log(arr.slice(arr.length - 2, arr.length).map((m) => m[0]));
// solve by heap
// solve by partition quick selection
