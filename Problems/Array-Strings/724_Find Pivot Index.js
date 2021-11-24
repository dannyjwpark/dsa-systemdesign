/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
        for(let i=0; i< nums.length; i++){
        let arrA = nums.slice(0, i);
        let sumA = arrA.reduce((a,b) => a+b, 0);
        let arrB = nums.slice(i+1);
        let sumB = arrB.reduce((a,b) => a+b, 0);
        if(sumA === sumB) return i;
    }
    return -1;
};