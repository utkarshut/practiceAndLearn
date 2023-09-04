function subSetSum(arr, n, sum){
  if(n===0){
    return sum===0? 1 : 0;
  }
  return subSetSum(arr,n-1,sum) + subSetSum(arr,n-1, sum-arr[n-1]);
}
console.log(subSetSum([25,20,5],3, 25))