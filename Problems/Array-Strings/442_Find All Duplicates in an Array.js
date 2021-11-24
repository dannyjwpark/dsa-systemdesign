/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr = nums.sort();
    let hashmap = new Map();
    
    for(let i=0; i< arr.length; i++){
        if(!hashmap.get(arr[i])){
            hashmap.set(arr[i], 1)
        } else {
            hashmap.set(arr[i], hashmap.get(arr[i]) + 1)
        }
    }
    
    let dups = [];
    for(let [k,v] of hashmap){
        if(v > 1) dups.push(k)
    }
    console.log(dups)
    return dups;
};