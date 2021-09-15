const n = 6;
const numbers = [13, 5, 11, 7, 23, 15];

function solution(n, numbers) {
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] > numbers[j + 1]) [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
    }
  }
  return numbers.join(' ');
}

console.log(solution(n, numbers));
