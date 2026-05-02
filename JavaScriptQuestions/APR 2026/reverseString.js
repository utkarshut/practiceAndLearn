let str = "I am Utkarsh";
console.log(str.split("").reverse().join(""));

function reverseString(str){
    let strArray = str.split("");
    let left = 0;
    let right = strArray.length-1;
    while(left<=right){
        [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
        left++;
        right--;
    }
    console.log(strArray.join(""));
}
reverseString(str);

let strPalin = "ABABA"
function checkPalindrome(str){
    let left = 0;
    let right = str.length-1;
    while(left <= right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(checkPalindrome(strPalin));