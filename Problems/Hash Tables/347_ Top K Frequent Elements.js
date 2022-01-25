var topKFrequent = function(nums, k) {
  let hash = {};
  for(let num of nums){
    hash[num] ? hash[num] ++ : hash[num] = 1;
  }
  
  let entries = Object.entries(hash).sort((a,b) => b[1] - a[1]);
  let output = [];
  
  for(let i=0; i<k; i++){
    output.push(entries[i][0]);
  }
  
  return output;
};
