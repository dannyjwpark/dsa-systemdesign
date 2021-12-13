const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W']
]
// W: water, L: land


const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r++){
    for (let c = 0; c < grid[0].length; c++){
      if (explore(grid, r, c, visited) === true){
        count ++;
      }
    }
  }

  return count;
}

const explore = (grid, r, c, visited) => {
  // base cases
    // checking in-bounds
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if(!rowInbounds || !colInbounds) return false;
  
    // checking if water or land (only want to track land)
  if (grid[r][c] === "W") return false;

    // check if visited
  const pos = r + ',' + c;
  if(visited.has(pos)) return false;

  visited.add(pos);

  explore(grid, r - 1, c, visited); // up
  explore(grid, r + 1, c, visited); // down
  explore(grid, r, c - 1, visited); // left
  explore(grid, r, c + 1, visited); // right

  return true;
}

console.log(islandCount(grid));

// r = # rows
// c = # cols

// Time: O(rc)
// Space: O(rc)