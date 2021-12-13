const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

  //  | |
  //  | |     converting from edges to adjacency list
  //  V V

// let graph = {
//   i: ['j','k'],
//   j: ['i'],
//   k: ['i', 'm', 'l'],
//   m: ['k'],
//   l: ['k'],
//   o: ['n'],
//   m: ['o']
// } 


const undirectedPath = (edges, src, dst) => {
  // declare a constant that stores helper function that converts edges to adjacency list
  const graph = buildGraph(edges);  

  // pass in Set that only stores unique values (w/ searching time complexity O(1))
  return hasPath(graph, src, dst, new Set());
}

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [ a, b ] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph
}

const hasPath = (graph, src, dst, visited)  => {
  if (src === dst) return true; 
  if (visited.has(src)) return false; // if src is in visited set, but not a destination

  visited.add(src); // add a source of certain recursion step to visited set

  for(let neighbor of graph[src]) {
    // recurse with each node until completely traversin possible pathsx
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
}

console.log(undirectedPath(edges, 'j', 'm'));



// n = # nodes, e = # edges

// Time complexity: O(e)
// Space complexity: O(n)