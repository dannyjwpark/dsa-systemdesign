const graph1 = {
  0: [8,1,5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2,4],
  4: [3, 2]
};


const connectedComponentsCount = (graph) => {
  // set: offers  O(1) lookup & O(1) addition
  const visited = new Set();
  let count = 0;
  
  // begin traversal
  for (let node in graph) {
    console.log(visited);
    if (explore(graph, node, visited) === true) {
      // whenever a new traversal on some region of the graph, increment the count
      count += 1;
      console.log(count);
    }
  }

  return count;
}

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  // use DFS 
  for (let neighbor of graph[current]) {  // graph's neighbors @ "current" node
    explore(graph, neighbor, visited);
  }

  // after iterating every neighbor nodes of a specific node, return true to exit the DFS
  return true;
}


console.log(connectedComponentsCount(graph1));

// n = # nodes, e = # edges

// Time complexity: O(e)
// Space complexity: O(n)

