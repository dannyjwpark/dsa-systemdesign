// Time: O(N)
// Space: O(N)

var minimumDeletions = function(s) {
    const stack = [];
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(stack.length && stack[stack.length-1] > s[i]) {
            count++;
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return count;
};
