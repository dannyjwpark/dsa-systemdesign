/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    const graph = buildGraph(edges);
    
    return hasPath(graph, start, end, new Set());
};

const buildGraph = (edges) => {
    const graph = {};
    
    edges.forEach((edge) => {
        const[a,b] = edge;
        
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        
        graph[a].push(b);
        graph[b].push(a);
    })
    
    return graph;
}

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if(visited.has(src)) return false;
    
    visited.add(src);
    
    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst, visited) === true){
            return true
        }
    }
    
    return false;
}