const [n, m] = [5, 20];
const problems = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

function solution(n, m, problems) {
  let answer = 0;

  function recursive(index, scores, times) {
    if (times > m) return;
    if (index > n - 1) {
      if (scores > answer) answer = scores;
    } else {
      recursive(index + 1, scores + problems[index][0], times + problems[index][1]);
      recursive(index + 1, scores, times);
    }
  }

  recursive(0, 0, 0);

  return answer;
}

console.log(solution(n, m, problems));
