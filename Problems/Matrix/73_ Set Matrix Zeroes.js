/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows0 = new Set(), cols0 = new Set();
    
    let num_rows = matrix.length;
    let num_cols = matrix[0].length;
    
    for(let r=0; r<num_rows; r++){
        for(let c=0; c<num_cols; c++){
            if(matrix[r][c] === 0){
                rows0.add(r);
                cols0.add(c);
            }
        }
    }
    console.log(rows0)
    console.log(cols0)
    
    for(let r=0; r<num_rows; r++){
        if(rows0.has(r)){
            matrix[r] = new Array(num_cols).fill(0);
        }
    }
    
    for(let c=0; c<num_cols; c++){
        if(cols0.has(c)){
            // matrix = matrix.map((row) => row[c] = 0)
            for(let r=0; r< num_rows; r++){
                matrix[r][c] = 0;
            }
        }
    }
    
    return matrix;
    
    
};
