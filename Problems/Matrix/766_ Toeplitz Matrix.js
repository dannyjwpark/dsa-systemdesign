/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let cols = matrix[0].length, rows = matrix.length;
    let x=0, y=0;
    
    const hor = (r,c, val) => {
        for(let i=0; i<rows; i++){
            if((c+i < cols) && matrix[r+i][c+i] !== val) return false;   
        }
        if(c+1 === cols) return true;
        return hor(r, ++c, matrix[r][c]);
    }
    const ver = (r,c, val) => {
        for(let i=0; i<cols; i++){
            if((r+i < rows) && matrix[r+i][c+i] !== val) return false;
        }
        console.log([r,c, matrix[r][c]])
        if(r+1 === rows) return true;
        return ver(++r, c, matrix[r][c]);        
    }
    
    return hor(0,0, matrix[0][0]) && ver(0,0, matrix[0][0]);
};

