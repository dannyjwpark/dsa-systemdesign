/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let arr = numbers;
    let idx = 1;
    while(arr.length > 0){
        let num = arr.shift();    
        for(let i=0; i<arr.length; i++){
            if(num + arr[i] === target){
                return [idx, i+idx+1]
            }
        }
        idx++;
    }
    return -1;
};