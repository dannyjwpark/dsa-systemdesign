/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b) => b-a);
    console.log(nums)
    return nums[k-1]
};