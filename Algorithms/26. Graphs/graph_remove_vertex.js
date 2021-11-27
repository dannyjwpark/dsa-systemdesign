// graph: nodes + connections
  // consists of a finite (and possibly mutable) set  of vertices or nodes or points
  // undirected graph: unordered pairs of these vertices
  // directed graph: ordered pairs of these vertices

// uses for graphs
  // social networks
  // location / mapping
  // routing algorithms
  // visual hierarchy
  // file systems organizations

// terminologies
  // vertex: a node
  // edge: connection between nodes
  // weighted/unweighted: values assigned to distances between vertices
    // weighted graph: when values are assigned
  // directed/undirected: directions assigned to distances between vertices
    // directed graph: Instagram followers relationship (can be 1 way)
    // undirected graph: Facebook friend relationship (must be 2 ways)


// tree : can have only 1 path from node A to node B
// graph : can have 1 or multiple paths from node A to node B


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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
g.addVertex("Seoul");
g.addEdge("Seoul", "Tokyo");
g.addEdge("Seoul", "Hong Kong");
g.removeVertex("Hong Kong");
console.log(g);

// Big O

// | Operation      |  Adjacency List  |  Adjacency Matrix |
// ---------------------------------------------------------
// | Add Vertex     |        O(1)      |       O(|V^2|)    |
// | Add Edge       |        O(1)      |         O(1)      |
// | Remove Vertex  |    O(|V| + |E|)  |       O(|V^2|)    |
// | Remove Edge    |       O(|E|)     |         O(1)      |
// | Query          |    O(|V| + |E|)  |         O(1)      |
// | Storage        |    O(|V| + |E|)  |       O(|V^2|)    |
// ---------------------------------------------------------

// adjacnecy list
  // + can take up less space (in sparse graphs)
  // + faster to iterate over all edges
  // - can be slower to llopup specific edge

// adjacency matrix
  // - takes up more space (in sparse graphs)
  // - slower to iterate over all edges
  // + faster to lookup specific edge

