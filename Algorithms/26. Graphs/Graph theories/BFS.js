// iterative

const graph = {
  a: ['b','c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const BFS = (graph, source) => {
  const queue = [ source ];

  while(queue.length){
    const current = queue.shift();
    console.log(current);
    for(let neighbor of graph[current]){
      queue.push(neighbor);
    }
  }

}


BFS(graph, 'a'); //acbedf