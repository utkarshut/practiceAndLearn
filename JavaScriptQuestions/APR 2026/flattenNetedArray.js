const arr = [1,2,[2,34,5,[2,3]]];
console.log(arr.flat(20))

Array.prototype.myFlat= function(){
    const arr = this;
    let res = [];
    for(let i=0;i< arr.length; i++){
        if(Array.isArray(arr[i])){
           res = res.concat(arr[i].myFlat());
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(arr.myFlat());