// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function getMaxProfit(nums){
    let min = nums[0];
    let max = 0 ;
    nums.forEach(elem=>{
        min = elem < min ? elem : min;
        max = elem - min > max ? elem - min : max;
    })
    return max;
}
console.log(getMaxProfit([7,1,5,3,6,4]));
console.log(getMaxProfit([7,6,4,3,1]));