var numPairsDivisibleBy60 = function(time) {
    var i, l, occuranceMap = {}, pairCount = 0;
    
    // Count the unique numbers we see under 60
    for (i = 0, l = time.length; i < l; i++) {
        
        let t= time[i] % 60;
        occuranceMap[t] ? occuranceMap[t] ++ : occuranceMap[t] = 1;        
    }
    
    // for each unique number, calculate how many pairs we can form
    for (let entry in occuranceMap) {
        let numberToMatch = 60 - parseInt(entry);
       
        if (entry === '30' || entry === '0') {

            // special case, count every possible pair: (x * (x - 1)) / 2
            pairCount += (occuranceMap[entry] * (occuranceMap[entry] - 1)) / 2;
        
        } else if (occuranceMap[numberToMatch]) {
            
            // default case, we should count  x * y
            pairCount += occuranceMap[entry] * occuranceMap[numberToMatch];
            
            // set the matched number to zero so we don't double count
            occuranceMap[numberToMatch] = 0;
        }
    }
    
    return pairCount; 
};