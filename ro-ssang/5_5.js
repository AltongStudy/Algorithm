const [n, k] = [10, 3];
const sales = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

function solution(n, k, sales) {
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < n; right++) {
    sum += sales[right];
    if (right >= k - 1) {
      answer = Math.max(answer, sum);
      sum -= sales[left];
      left++;
    }
  }
  return answer;
}

console.log(solution(n, k, sales));
