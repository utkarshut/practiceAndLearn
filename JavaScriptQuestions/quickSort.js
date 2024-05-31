
const nums1 = [45, 4, 3, 1, 56, 46, 9];
function quickSort(nums){
  if(nums.length<=1){
    return nums;
  }
  const pivotElem = nums[0];
  const left = [];
  const right = [];
// Start from index 1 to exclude the pivot element
  for(let i=1;i<nums.length;i++){
    if(nums[i] > pivotElem){
        left.push(nums[i]);
    }else{
        right.push(nums[i]);
    }
  }
  return [...quickSort(left),pivotElem, ...quickSort(right)]
}

function insertionSort(nums){
    for(let i=1;i<nums.length;i++){
        let key =  nums[i]
        let j = i-1
        while(j>=0 && nums[j] > key){
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = key;
    }
    return nums;
}

function selectionSort(nums){
    for(let i=0; i< nums.length;i++){
      let min = i;
      let j = i+1
      while(j < nums.length){
        if(nums[j] < nums[min]){
            min = j;
        }
        j++;
      }
      // check min not i will optimize swap
      if(min != i) 
      [nums[i],nums[min]] = [nums[min],nums[i]];
    }
    return nums;
}

function bubbleSort(nums){
   for(let i=0; i < nums.length; i++){
    for(let j =0; j< nums.length; j++){
        if(nums[i] < nums[j]){
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
   }
   return nums;
}

console.log("QUICK :",quickSort(nums1))
console.log("INSERTION :",insertionSort(nums1))
console.log("SELECTION :",selectionSort(nums1))
console.log("BUBBLE :",bubbleSort(nums1))