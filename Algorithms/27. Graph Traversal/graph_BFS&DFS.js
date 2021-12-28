class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }
  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){        // helper function that accepts vertex
      if(!vertex) return null;  // base case when vertex is empty
      visited[vertex] = true;   // mark vertex as visited
      result.push(vertex);      // add vertex to results list
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){   // if neighbor is not visited
          return dfs(neighbor)  // recursively call DFS on neighbor
        }
      });
    })(start);

    return result;
  }
  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){        // check if the vertex hasn't been visited
          visited[neighbor] = true;  // mark it as visited
          stack.push(neighbor)       // add vertex to the result list; will end on the end (when no vertex to push)
        } 
      });
    }
    return result;
  }
  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);
      

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g);
console.log("DFS recursive:")
console.log(g.depthFirstRecursive("A"));
console.log("DFS iterative:")
console.log(g.depthFirstIterative("A"));
console.log("BFS:")
console.log(g.breadthFirst("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]

