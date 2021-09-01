const [n, m] = [5, 5];
const numbers = [1, 3, 1, 2, 3];

// while문 활용
function solution(n, m, numbers) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = numbers[right];
  while (right < n) {
    if (sum <= m) {
      answer += right - left + 1;
      right++;
      sum += numbers[right];
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
  let sum = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    sum += numbers[right];
    while (sum > m) {
      sum -= numbers[left++];
    }
    if (sum <= m) {
      answer += right - left + 1;
    }
  }
  return answer;
}

console.log(solution(n, m, numbers));
