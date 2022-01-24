var characterReplacement = function(s, k) {
  const n = s.length;
  // array of 26 elements that keeps track of counts of each alphabet
  const count = new Array(26).fill(0);
  
  let maxCount = 0, maxLen = 0, left = 0;
  
  for (let right = 0; right < n; right++) {
    const idx1 = s.charCodeAt(right) - 65;
    count[idx1]++;
    
    maxCount = Math.max(maxCount, count[idx1]);
    
    // implement sliding window
    while (right - left + 1 - maxCount > k) {
      const idx2 = s.charCodeAt(left) - 65;
      count[idx2]--;
      left++;
    }
    
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
};