const n = 5;
const times = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => {
    if (a[0] == b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  let count = 0;
  let leaveTime = times[0][1];
  for (let i = 0; i < n; i++) {
    const enterTime = times[i][0];
    if (enterTime < leaveTime) {
      count++;
    } else {
      answer = Math.max(answer, count);
      leaveTime = times[i][1];
      count = 1;
    }
  }
  answer = Math.max(answer, count);
  return answer;
}

console.log(solution(n, times));
