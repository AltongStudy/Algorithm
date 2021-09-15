const n = 6;
const numbers = [13, 5, 11, 7, 23, 15];

function solution(n, numbers) {
  for (let i = 0; i < n - 1; i++) {
    let idx = i;

    // 최솟값을 탐색한다.
    for (let j = i + 1; j < n; j++) {
      if (numbers[j] < numbers[idx]) idx = j;
    }

    // 최솟값이 자기 자신이면 swap 하지 않는다.
    if (idx != i) [numbers[i], numbers[idx]] = [numbers[idx], numbers[i]];
  }
  return numbers.join(' ');
}

console.log(solution(n, numbers));
