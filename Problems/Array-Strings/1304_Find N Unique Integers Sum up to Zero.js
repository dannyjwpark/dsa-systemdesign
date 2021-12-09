/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let length = Math.floor(n / 2);
    let nums = [];
    for(let i=1; i<=length; i++){
        nums.push(i, -i);
    }
    
    if(n%2 !== 0) nums.push(0);
    return nums;
};