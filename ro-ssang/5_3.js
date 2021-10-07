const [n, m] = [8, 6];
const numbers = [1, 2, 1, 3, 1, 1, 1, 2];

// while문 활용
function solution(n, m, numbers) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (left <= right) {
    if (sum < m) {
      if (right == n) break;
      sum += numbers[right];
      right++;
    } else if (sum == m) {
      sum -= numbers[left];
      left++;
      answer += 1;
    } else {
      sum -= numbers[left];
      left++;
    }
  }
  return answer;
}

// for문 활용
function solution2(n, m, numbers) {
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < n; right++) {
    sum += numbers[right];
    if (sum == m) answer++;
    while (sum > m) {
      sum -= numbers[left++];
      if (sum == m) answer++;
    }
  }
  return answer;
}

console.log(solution(n, m, numbers));
