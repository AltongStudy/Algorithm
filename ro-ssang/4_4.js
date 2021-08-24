const [n, m] = [5, 28];
const amounts = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

function solution(n, budget, amounts) {
  let answer = 0;
  amounts.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n; i++) {
    let count = 0;
    let total = amounts[i][0] / 2 + amounts[i][1];
    for (let j = 0; j < n; j++) {
      if (total > budget) break;
      if (i == j) continue;
      count += 1;
      total += amounts[j][0] + amounts[j][1];
    }
    if (count > answer) answer = count;
  }
  return answer;
}

console.log(solution(n, m, amounts));
