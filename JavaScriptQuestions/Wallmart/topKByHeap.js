let nums = [1, 1, 1, 2, 2, 3];

function topK(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }
  console.log(map.entries());
  const arr = Array.from(map.entries());
  const heap = new Heap();
  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
    while (heap.size() > k) {
      heap.pop();
    }
  }
  console.log(heap);
}
class Heap {
  heap = [];
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this.heap.sort((a, b) => a[1]-b[1]);
  }
  size() {
    return this.heap.length;
  }

  pop() {
    this.heap.shift();
  }
}
topK(nums, 2);
