/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let charObj = new Array(26).fill(0);
    // let charObj2 = new Array(26).fill(0);
    
    for(let i=0; i<s.length; i++){
        let idx = s[i].charCodeAt(0) - "a".charCodeAt(0);
        charObj[idx]++;
    }
    for(let i=0; i<s.length; i++){
        let idx = t[i].charCodeAt(0) - "a".charCodeAt(0);
        charObj[idx]--;
    }
    let diff = charObj.reduce((a,b) => Math.abs(a) + Math.abs(b));
    return Math.floor(diff / 2);
};