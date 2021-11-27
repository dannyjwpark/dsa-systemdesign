// /**
//  * @param {string} s
//  * @return {number}
//  */
// var myAtoi = function(s) {
//     let nums= [];
//     let strs = [];
//     let conditions = [" ", "+", "-"]
    

    
//     for(let i=0; i<s.length; i++){
//         if(parseInt(s[i]) || s[i]==='0'){
//             nums.push(s[i])
//         } else if(i!==0 && s[i] === '.'){
//             return nums.join('')
//         } else {
//             strs.push(s[i])
//         }
//     }
    
//     if (strs.includes('-') && strs.includes('+')){
//         return 0
//     } else  if(!conditions.includes(s[0]) && !parseInt(s[0])){
//         return 0;
//     } else if(strs.length === 0){
//         return nums.join('')
//     }
    
//     let output = nums.join('');
//     // console.log(nums);
    
//     if (strs.includes('-') && -output >= (-2)**31){
//         return -output;
//     } else if (strs.includes('-') && -output < (-2)**31){
//         return (-2)**31;
//     } else if (!strs.includes('-') && output <= (2**31-1)){
//         return output
//     } else if (!strs.includes('-') && output > (2**31-1)){
//         return (2**31 -1 )
//     }
// };

var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2**31 - 1), (-2)**31)
};