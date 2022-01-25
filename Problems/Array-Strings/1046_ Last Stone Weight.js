var lastStoneWeight = function(stones) {
  while(stones.length > 1){
    stones = stones.sort((a,b) => a-b);
    let first = stones.pop(), second = stones.pop();
    if(first > second) stones.push(first - second);
    if(second > first) stones.push(second - first);
  }
  
  return stones;
};