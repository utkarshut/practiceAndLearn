function secondLargest(array) {
  let largest = 0;
  let res = -1 ;
  for (let i = 1; i < array.length; i++) {
    // Check if array is greater than assumed largest then switch
    if(array[i]>array[largest]){
        res = largest;
        largest = i;
    } else if(array[i] !== array[largest]) {
        // check if current is greater than response then assign it to response
        if( res === -1 || array[i] > array[res]){
            res = i;
        }
    }
  }
  return [res];
}
console.log(secondLargest([10,23,4,5]));
console.log(secondLargest([10,10,10,5,3]));

function checkArraySorted(nums){
    for(i=1; i< nums.length; i++){
        if(nums[i]< nums[i-1]){
            return false;
        }
    }
    return true;
}

console.log(checkArraySorted([1,2,45,67]))