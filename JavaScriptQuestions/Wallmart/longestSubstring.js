//Longest substring without repeating characters

// Input: "abcabcbb"
// Expected output: 3

let str = "abcabcbb";
let left = 0;
let right = 0;
let map = new Map();
let max = 0;

while(right < str.length){
    if(map.has(str[right])){
        console.log(left,right,map.get(str[right]))
        left = Math.max(left, map.get(str[right])+1);
        console.log(left)
        
    }
    map.set(str[right], right);
    max = Math.max(max, right-left+1);
    right++;
}
console.log(max)
