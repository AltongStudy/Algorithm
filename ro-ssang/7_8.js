const n = 3;
const meetings = [
  [3, 3],
  [1, 3],
  [2, 3],
];

function solution(n, meetings) {
  meetings.sort((a, b) => {
    if (a[1] == b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let count = 1;
  let endTime = meetings[0][1];
  for (let i = 1; i < n; i++) {
    const startTime = meetings[i][0];
    if (startTime >= endTime) {
      endTime = meetings[i][1];
      count++;
    }
  }
  return count;
}

console.log(solution(n, meetings));
