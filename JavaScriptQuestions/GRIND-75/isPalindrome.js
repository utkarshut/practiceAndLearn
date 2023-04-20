function isPalindrome(s){
    s = s.toLowerCase().replace(/\W/g,"");
    if(s === s.split("").reverse().join("")){
      return true;
    } else{
        return false;
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("A man, acc plan, a canal: Panama"));

// NOTE:
// replace(/\W/g,"") ==> Removes all non alphanumeric character