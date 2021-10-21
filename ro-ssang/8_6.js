const [c, n] = [259, 5];
const weights = [81, 58, 42, 33, 61];

function solution(c, n, weights) {
  let answer = 0;

  function recursive(index, sum) {
    if (sum > c) return;
    if (index > n - 1) {
      if (sum > answer) answer = sum;
    } else {
      recursive(index + 1, sum + weights[index]);
      recursive(index + 1, sum);
    }
  }

  recursive(0, 0);

  return answer;
}

console.log(solution(c, n, weights));
