const n = 6;
const heights = [120, 130, 150, 150, 130, 150];

function solution(n, heights) {
  const answer = [];
  const arr = [...heights];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (arr[i] != heights[i]) answer.push(i + 1);
  }
  return answer.join(' ');
}

console.log(solution(n, heights));
