// Time: O(N)
// Space: O(N)
var numIdenticalPairs = function(nums) {
    let counter = 0;
    while(nums.length > 0){
        let num = nums.pop();
        nums.forEach((n) => {
            if(n === num) counter++;
        })
    }
    return counter;
};