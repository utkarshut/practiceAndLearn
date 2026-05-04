const grid = [
  ["S", "0", "0", "0"],
  ["1", "1", "0", "1"],
  ["0", "0", "0", "0"],
  ["0", "1", "1", "E"],
];
function Bfs(grid) {
  let queue = [];
  let m = grid.length;
  let n = grid[0].length;
  //let visited = Array.from({length:m},()=>Array(n).fill(false));
  let visited = [];
  for (let i = 0; i < m; i++) {
    visited.push(new Array(n).fill(false));
  }
  console.log(visited);
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  queue.push([0, 0]);
  visited[0][0] = true;
  let step = 0;
  while (queue.length > 0) {
    console.log(queue);
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [r, c] = queue.shift();
      if ("E" == grid[r][c]) {
        return step;
      }
      // all neighbor and check
      for (let [dr, dc] of directions) {
        let nr = r + dr;
        let nc = c + dc;
        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < m &&
          nc < n &&
          grid[nr][nc] != "1" &&
          !visited[nr][nc]
        ) {
          queue.push([nr, nc]);
          visited[nr][nc] = true;
        }
      }
    }
    step++;
  }
  return -1;
}

console.log(Bfs(grid));
