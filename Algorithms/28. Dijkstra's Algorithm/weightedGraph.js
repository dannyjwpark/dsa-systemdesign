// weightedGraph: contains vertex + weight (i.e. length btwn nodes)
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2, weight){
    this.adjacencyList[vertex1].push({node:vertex2,weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
}

// i.e.
let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addEdge("A","B", 5); 
console.log(wg.adjacencyList);