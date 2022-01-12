var sumRootToLeaf = function(root) {
  if(!root) return 0;
  
  const binaries = [];
  const traverse = (node, str) => {
      if(!node) return;
      
      const binary = `${str}${node.val}`
      if(!node.left && !node.right) binaries.push(binary);
      
      traverse(node.left, binary)
      traverse(node.right, binary)
  }
  
  traverse(root, '');
  console.log(binaries)
  

  let sum= 0;
  binaries.forEach((el) => {
      sum+= parseInt(el,2)
  })
  return sum
};