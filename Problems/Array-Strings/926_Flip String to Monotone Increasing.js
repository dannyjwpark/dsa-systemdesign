/**
 * @param {string} s
 * @return {number}
 */

var minFlipsMonoIncr = function(s) {
    let one = 0;
    let flip = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]==='1'){
            one++
        }else {
            flip++;
        }
        flip = Math.min(one, flip)
    }
    return flip;
}