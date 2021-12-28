const possibleBipartition = (N, dislikes) =>  {
    // group one = 1
    // group two = -1
    // unvisited = 0;
    let visited = [];
    let graph = buildGraph(N, dislikes);
    
    for (let i = 0; i < N; i ++) {
        visited.push(0);
    }
    
    for (let i = 0; i < N; i ++) {
        if (visited[i] === 0 && !dfs(i, graph, visited, 1)) return false;
    }
    return true;
};

const buildGraph = (n, edges) => {
    let graph = Array.from({length: n}, () => []);
    for (let edge of edges) {
        let [src, dest] = edge;
        // subtract one since the set of N people numbered from 1.
        graph[src-1].push(dest-1);
        graph[dest-1].push(src-1);
    }
    return graph;
}

const dfs = (node, graph, visited, group) => {
    visited[node] = group;
    
    let nodes = graph[node];
    for (let i = 0; i < nodes.length; i ++) {
        if (visited[nodes[i]] === group) return false;
        if (visited[nodes[i]] === 0 && !dfs(nodes[i], graph, visited, -group)) return false;
    }
    return true;
}


/*

1 - 2
|   |
3   4


1 - 2
| /
3

1 - 2
    |
\   3
 \  |
  \ 4
   \|
    5


*/