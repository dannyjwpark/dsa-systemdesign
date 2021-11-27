/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idx = 0;
    
    while (idx < nums.length){
        for(let i=0; i<nums.length; i++){
            if(i > idx && nums[i]+nums[idx] === target){
                return [idx,i]
            }
        }   
        idx ++;
    }
};