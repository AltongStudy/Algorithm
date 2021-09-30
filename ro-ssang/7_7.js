const n = 5;
const coords = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

function solution(n, coords) {
  coords.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  return coords.map((coord) => coord.join(' ')).join('\n');
}

console.log(solution(n, coords));
