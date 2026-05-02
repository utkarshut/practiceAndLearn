
const nums = [1,2,3,4,5];

Array.prototype.myFilter=function (callbackFn){
    const arr = this;
    const result = [];  
    for(let i=0;i< arr.length;i++){
        if(callbackFn(arr[i])){
            result.push(arr[i]);  
        }
    }
    return result;
}
const even = nums.myFilter(f => f%2==0);
console.log(even);

Array.prototype.myMap = function(callbackFn){
    const arr = this;
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(callbackFn(arr[i]))
    } 
    return result;
}
const mapped = nums.myMap(m=> m+1);
console.log(mapped);