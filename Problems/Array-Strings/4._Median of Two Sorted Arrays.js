/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = nums1.concat(nums2).sort((a,b) => a-b);
    let length = sorted.length;
    let mid = Math.floor(length / 2);

    if(length % 2 === 1) {
        return sorted[mid]
    } else {
        let median = (sorted[mid] + sorted[mid-1])*0.5;

        return median;
    }
};