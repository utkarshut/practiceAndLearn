function towerOfHanoi(n,A , B, C){
  if(n===1){
    console.log(`Disk 1 move from ${A} to ${C}`);
    return;
  }
  towerOfHanoi(n-1,A,C,B);
  console.log(`Disk ${n} move from ${A} to ${C} using ${B} as auxillary`);
  towerOfHanoi(n-1,B,A,C);
}
towerOfHanoi(3,"A","B","C");

