/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    if(s.length === 1) return 1;
    
    let strs = [];
    
    let arr = s.split('');
    
    while(arr.length > 0){
        let str = arr.shift();
        for(let i=0; i<arr.length; i++){
            if(!str.includes(arr[i])){
                str+=arr[i];
            } else {
                strs.push(str);
                break;
            }        
        }
        strs.push(str);
    }
    
    let output = strs.sort((a,b) => b.length - a.length)[0];
    console.log(output);
    return output.length;
};