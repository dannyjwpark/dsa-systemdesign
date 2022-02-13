var calculateTime = function(keyboard, word) {
    let hash = {};
    for(let i=0; i<keyboard.length; i++){
        hash[keyboard[i]] = i;
    }
    
    let queue = word.split('');
    for(let key in queue){
        queue[key] = hash[queue[key]];
    }
    queue.unshift(0);
    let moves = 0;
    for(let i=0; i<queue.length-1; i++){
        moves += Math.abs(queue[i]-queue[i+1]);
    }
    return moves;
};