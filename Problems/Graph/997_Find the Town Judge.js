var findJudge = function(n, trust) {
     if(n === 1) return 1;
    
    const graph = trustGraph(trust);
    let trustees = trusting(trust);
    console.log(graph)
    console.log(trustees)
    
    
    for(let key of Object.keys(graph)){
        if(graph[key].length === n - 1 && (!(key in trustees))) return key;
    }
    
    return -1    
};

const trustGraph = (trusts) => {
    const graph = {};
    
    trusts.forEach(trust => {
        const [a,b] = trust;
        if(!(b in graph)) graph[b] = [];
        
        graph[b].push(a);
    })
    
    return graph;
}

const trusting = (trusts) => {
    const graph = {};
    
    trusts.forEach(trust => {
        const [a,b] = trust;
        if(!(a in graph)) graph[a] = [];
        
        graph[a].push(b);
    })
    
    return graph;
}