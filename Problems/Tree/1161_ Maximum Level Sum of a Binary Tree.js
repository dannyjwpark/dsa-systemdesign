var maxLevelSum = function(root) {
  if(root == null) return 0;
  let node = root, level = 0, q = [node], maxSumLevel = 1, sum = root.val;
  
  while(q.length){
    let insideSum=0, len = q.length;
    level++;
    for(let i =0;i<len; i++){
      let node = q.shift();
      insideSum += node.val;
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    if(insideSum>sum) {
      sum = insideSum;
      maxSumLevel = level;
    };
  }
  return maxSumLevel;
};