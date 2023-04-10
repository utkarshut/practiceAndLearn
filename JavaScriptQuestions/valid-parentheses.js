/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const dict = {'[':']','{':'}','(':')'};
    let stck = [];
    for(let index=0; index< s.length;index++){
       if(dict[s[index]]){
           stck.push(dict[s[index]])
        } else if(s[index] !== stck.pop()){
           return false;
        }
     }
    return (stck.length === 0);
};

console.log("check input has valid set of closing paranthesis");
console.log(isValid('()[]{}'));
console.log(isValid('{[()]}'));