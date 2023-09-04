function trappingWater(nums) {
  let lmax = [];
  let rmax = [];
  let res = 0;
  const n = nums.length;
  lmax[0] = nums[0];
  for (let i = 1; i < n; i++) {
    lmax[i] = Math.max(lmax[i - 1], nums[i]);
  }
  rmax[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rmax[i] = Math.max(nums[i], rmax[i + 1]);
  }
  console.log(lmax, rmax);
  for (let i = 1; i < n - 1; i++) {
    const waterTrap = Math.min(lmax[i], rmax[i]) - nums[i];
    res = res + waterTrap;
  }
  console.log(res);
}
trappingWater([5, 0, 6, 2, 3]);
