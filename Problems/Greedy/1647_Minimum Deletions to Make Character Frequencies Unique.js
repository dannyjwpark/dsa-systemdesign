/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let chars = new Array(26).fill(0);
    let counter = 0;
    
    for(let i in s){
        let char = s[i];
        let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        chars[idx] ++;
    }
    
    // sort the frequencies from greatest to smallest
    let nums = chars.sort((a,b) => b-a);

    for(let i=1; i<nums.length; i++){
        // frequency should be greater than 0 
        // since we can't delete an element occurring 0 times
        while(nums[i] && nums[i] >= nums[i-1]){
            nums[i]--;
            counter ++;
        }
    }
    return counter
    // T.C: O(N), sorting an array with a constant number of elements results in O(N) time complexity
    // S.C: O(1)
}



