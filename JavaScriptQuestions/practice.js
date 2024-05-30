function maxIndexDiff(A, N) {
  //your code here
  let leftMin = [];
  leftMin[0] =  A[0];
  for(let i = 1; i < N ; i++){
     leftMin[i] =  Math.min(leftMin[i-1],A[i] )
  }
  console.log(leftMin)
  let rightMax = [];
  rightMax[N-1] = A[N-1];
  for(let i = N-2; i >=0; i--){
    rightMax[i] =  Math.max(rightMax[i+1],A[i] )
 }
  console.log(rightMax);
  let i = 0 ; j = 0; maxDiff = -1;
  while(i < N && j < N){
    if(rightMax[j]>leftMin[i]){
        maxDiff = Math.max(maxDiff, j-i);
        j++;
    }else{
        i++
    }
  }
  return maxDiff;
}
console.log(
  //maxIndexDiff([65, 6, 74, 94, 56, 89, 9, 63, 75, 25, 34, 68, 93, 48, 16], 15)
);

function findSmallestMissingPositive(arr) {
    const n = arr.length;
  
    // Step 1: Mark positive elements by using array indices as markers
    // for (let i = 0; i < n; i++) {
    //   // Check if the element is in the range [1, n] and not marked already
    //   while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
    //     // Swap the current element to its correct position
    //     [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
    //   }
    // }
    console.log(arr)
    for(let i=0; i < n; i++){
        while(arr[i] > 0 && arr[i] <= n && arr[arr[i]-1] !== arr[i]){
          //[arr[i],arr[arr[i]-1]] =  [arr[arr[i]-1],arr[i]]
          [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
          console.log(arr[i], arr[arr[i]-1], i , arr[i]-1)
        }
    }
    console.log(arr)
    // Step 2: Find the first index with a non-positive value
    for (let i = 0; i < n; i++) {
      if (arr[i] !== i + 1) {
        return i + 1;
      }
    }
  
    // If all positive integers from 1 to N are present, return N + 1
    return n + 1;
  }
  
  // Example usage:
  const arr = [2, 3, -1, 1];
  const result = findSmallestMissingPositive(arr);
  console.log("Smallest missing positive number:", result);
  
  function convertToWave(n, arr)
    {
        //your code here
        for(let i =1 ; i<n;i+=2){
            if(n%2 !==0 && i=== n-1){
                
            }else{
                // let temp = arr[i];
                // arr[i] = arr[i-1];
                // arr[i-1]= temp;
                [arr[i-1] , arr[i]] = [arr[i], arr[i-1]];
                console.log(arr)
            }
            
        }
    }
    convertToWave(5,[1,2,3,4,5])

    function circularSubarraySum(arr, N){
        // code here
        let res = 0;
        let currSum= 0;
        let curr_max =0;
        for(let i=0;i<N;i++){
            currSum = 0;
            res = 0
            for(let j =0; j< N;j++ ){
                let index = (i+j)%N;
                currSum += arr[index];
                curr_max = Math.max(curr_max,currSum);
                //console.log(curr_max);
            }
            console.log(curr_max)
            res = Math.max(res, curr_max);
        }
        return res;
    } 

    console.log(circularSubarraySum([8,-8,9,-9,10,-11,12],7))