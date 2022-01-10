/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let indices = [];
    nums.map((el, idx) => {
        if(el === 0) indices.push(idx);
    })
    
    if(indices.length === 0) return nums.length;
    
    let maxScore = 1;
    let score = 1;
    
    while(indices.length){
        let idx = indices.shift();

        for(let i=idx-1; i>=0; i--){
            if(nums[i] === 0) break;
            score++;
        }

        for(let i = idx+1; i<nums.length; i++){
            if(nums[i] === 0) break;
            score ++;
        }
        
        maxScore = Math.max(maxScore, score);
        score = 1;
    }
      
    return maxScore;
    
};