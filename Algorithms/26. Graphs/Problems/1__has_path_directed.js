// f -> g -> h
// |  /
// v
// i <- j
// |
// v
// k

// src: j, dst: f    => return false
// src: f, dst: k   => return true


let adjacency_list = { 
  f: ['g','i'],
  g: ['h'],
  h: [],
  i: ['g','k'],
  j: ['i'],
  k: []
}

// recursive method:
const haspath_recursive = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]){
    if (haspath_recursive(graph, neighbor, dst) === true){
      return true;
    }
  }

  return false;
}

console.log(haspath_recursive(adjacency_list, 'f', 'k')); // true
console.log(haspath_recursive(adjacency_list, 'j', 'f')); // false


// iterative method:
const hasPath_iterative = (graph, src, dst) => {
  const queue = [src];

  while (queue.length){
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
}

console.log(hasPath_iterative(adjacency_list, 'f', 'k')); // true
console.log(hasPath_iterative(adjacency_list, 'j', 'f')); // false


// n = # nodes, e = # edges

// Time complexity: O(e)
// Space complexity: O(n)