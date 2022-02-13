/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    function helper(idx1, idx2, ls){
        if(idx1 >= idx2) return;
        
        // let s1 = ls[idx1];
        // ls[idx1] = ls[idx2], ls[idx2] = s1;
        [ls[idx1], ls[idx2]] = [ls[idx2], ls[idx1]];
        

        return helper(++idx1, --idx2, ls)
    }
    
    return helper(0, s.length-1, s);
};