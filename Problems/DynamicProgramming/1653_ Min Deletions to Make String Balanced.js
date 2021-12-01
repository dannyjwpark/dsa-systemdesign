// Time: O(N)
// Space: O(N)

var minimumDeletions = function(s) {
    const dp = [0];
    let bCount = 0;
    
    if(s[0] == 'b') bCount++;
    
    for(let i = 1; i < s.length; i++) {
        if(s[i] === 'a') {
            dp[i] = Math.min(dp[i-1] + 1, bCount);
        } else {
            dp[i] = dp[i-1];
            bCount++
        }
    }
    return dp[s.length-1];
};