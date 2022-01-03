/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    
    let up, down, left, right;
    let result = 0;
    
    for (let r=0; r<rows; r++){
        for(let c = 0; c<cols; c++){
            if(grid[r][c] === 1){
                if (r === 0) {
                    up = 0
                } else {
                    up = grid[r-1][c];
                }
                
                if(c === 0) {
                    left = 0;
                } else {
                    left = grid[r][c-1];
                }
                
                if(r === rows - 1){
                    down = 0
                } else {
                    down = grid[r+1][c];
                }
                
                if(c === cols - 1){
                    right = 0;
                } else {
                    right = grid[r][c+1];
                }
                
                result += 4 - (up + left + right + down);
            }
        }
    }
    
    return result;
};