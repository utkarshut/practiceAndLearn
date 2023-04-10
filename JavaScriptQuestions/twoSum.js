/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let currentIndex = 0; currentIndex < nums.length; currentIndex++){
         const current = nums[currentIndex];
         const remainingElem = target - current;
         const indexOfRemainingElem = nums.indexOf(remainingElem);
         if (indexOfRemainingElem !== -1 && indexOfRemainingElem !== currentIndex) {
             return [currentIndex, indexOfRemainingElem];
         }
    }
};
console.log("Give two index those sum is target");
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,3], 6));
