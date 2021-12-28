const graph = {
  a: ['c','b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

// iterative method
const DFS_iterative = (graph, source) => {
  const stack = [ source ];

  while (stack.length > 0){
    const current = stack.pop();
    console.log(current);

    for(let neighbor of graph[current]){
      stack.push(neighbor);
    }
  }
};


// recursive method

const DFS_recursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]){
    DFS_recursive(graph, neighbor);
  }
}

DFS_iterative(graph, 'a');  // abdfce
console.log("---------");
DFS_recursive(graph, 'a');  // abdfce