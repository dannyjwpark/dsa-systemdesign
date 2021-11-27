const exist = (board, word) => {
    if(board.length === 0 ) return false;
    
    const h = board.length;
    const w = board[0].length;
    const dirs = [[-1, 0], [0,1], [1,0], [0,-1]]  //left, up, right, down
    
    const go = (x,y,k) => {
        if (board[x][y] !== word[k]) return false;  // skip if not the first letter of word
        if (k === word.length -1 ) return true; // check if last letter of word is reached
        
        board[x][y] = '*'; // mark as visited
        for (const [dx,dy] of dirs) {
            const i = x + dx; // new x coord
            const j = y + dy; // new y coord
            if (i >= 0 && i < h && j >= 0 && j < w) { // check if in-bound
                if (go(i,j,k+1)) return true;
            }
        }
        board[x][y] = word[k]; // reset
        return false;
    };
    
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          if (go(i, j, 0)) return true;
        }
      }

  return false;
}