var minTotalDistance = function(grid) {
  // rows and cols collected here are sorted already
  // takes the advantage of going in rows first or column first order
  let rows = collectRows1D(grid);
  let cols = collectColumns1D(grid);
  
  // median gets the smallest standard deviation, so 
  // we collect medians for both rows and columns
  let medianRows = rows[Math.floor(rows.length/2)];
  let medianCols = cols[Math.floor(cols.length/2)];
  
  // rows and column distance is independent to each other, because we want
  // to calculate manhattan distance (addition of rows and columns walked)
  return minDistance(rows, medianRows) + minDistance(cols, medianCols);
};

function minDistance(list, median) {
  let distance = 0;
  for(let item of list) {
    distance += Math.abs(median-item);
  }
  return distance;
}

// collect row indices in sorted order
function collectRows1D(grid) {
  let result = [];
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        result.push(i);
      }
    }
  }
  return result;
}

// collect column indices in sorted order
function collectColumns1D(grid) {
  let result = [];
  for(let i = 0; i < grid[0].length; i++) {
    for(let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 1) {
        result.push(i);
      }
    }
  }
  return result;
}