var matrixReshape = function(mat, r, c) {
    let num_els = mat.length * mat[0].length;
    if(r * c !== num_els) return mat;
    
    let destructured = [];
    for(let i=0; i<mat.length; i++){
        for(let c = 0; c<mat[0].length; c++){
            destructured.push(mat[i][c]);
        }
    }
    
    let result = new Array(r).fill(null).map(() => new Array(c).fill(null));
    
    for(let row = 0; row < r; row++){
        for(let col = 0; col < c; col++){
            result[row][col] = destructured.shift();
        }
    }
    
    return result;
};