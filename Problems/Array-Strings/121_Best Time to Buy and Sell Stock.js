var maxProfit = function(prices) {
    let min = prices[0], max=0;
    for(let i=1; i<prices.length; i++){
        max = Math.max(max, prices[i]-min);
        if(prices[i] < min) min = prices[i];
    }
    return max;
};

// O(N) time complexity
// using sliding window