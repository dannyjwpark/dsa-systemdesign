/**
 * @param {number[]} nums
 * @return {number}
*/

var dominantIndex = function(nums) {
    for(let i=0; i<nums.length; i++){
        let arr = nums.slice(0, i).concat(nums.slice(i+1));
        let max = Math.max(...arr);
        if(nums[i] >= 2*max) return i;
    }
    return -1;
};