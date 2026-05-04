const arr = [100, 4, 200, 1, 3, 2];

const set = new Set(arr);
console.log(set);
let max = 0;
for(let item of set){
    if(!set.has(item-1)){
       let l = 0;
       while(set.has(item)){
         item++;
         l++;
       }
       max = Math.max(l,max);
    }
}
console.log(max);

