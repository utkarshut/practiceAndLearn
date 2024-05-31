const nums = [45, 4, 3, 1, 56, 46, 9];

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid,arr.length);
console.log("left :",left,"right:",right)
  return merge(mergeSort(left), mergeSort(right));
};
function merge(left, right) {
    console.log(left,right)

    let res = [];
    let i = 0;
    let j = 0;
    while(i < left.length  && j < right.length){
        if(left[i] < right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }
    while(i<left.length){
        res.push(left[i]);
        i++;
    }
    while(j<right.length){
        res.push(right[j]);
        j++;
    }

    return res;
}

console.log(mergeSort(nums));
