/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const graph = buildGraph(edges);
    let length = Object.keys(graph).length;
    
    for(let key of Object.keys(graph)){
        if(graph[key].length === length - 1) return key;
    }
    
    
};

const buildGraph = (edges) => {
    const graph = {}
    
    edges.forEach((edge) => {
        const [a,b] = edge;
        
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph [b] = [];
        
        graph[a].push(b);
        graph[b].push(a);
    })
    
    return graph;
}