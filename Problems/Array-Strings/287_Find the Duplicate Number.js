/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//     let hmap = new Map();
    
//     for(let i=0; i<nums.length; i++){
//         if(hmap.get(nums[i])){
//            hmap.set(nums[i], hmap.get(nums[i])+1)
//        } else {
//            hmap.set(nums[i], 1)
//        }
//     }
    
//     console.log(hmap)
    
//     for(let [k,v] of hmap){
//         if(v>1) return k;
//     }
// };

var findDuplicate = function(nums) {
    let tortoise = nums[0];
    let hare = nums[tortoise];
    
    while(hare!==tortoise){
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    }
    
    tortoise = 0;
    while(hare!==tortoise){
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    
    return hare;
};