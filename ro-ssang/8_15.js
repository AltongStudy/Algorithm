const [n, k] = [5, 3];
const numbers = [2, 4, 5, 8, 12];
const m = 6;

function solution(n, k, numbers, m) {
  let answer = 0;

  function recursive(count, start, sum) {
    if (count == k) {
      if (sum % m == 0) answer++;
    } else {
      for (let i = start; i < n; i++) {
        recursive(count + 1, i + 1, sum + numbers[i]);
      }
    }
  }

  recursive(0, 0, 0);

  return answer;
}

console.log(solution(n, k, numbers, m));
