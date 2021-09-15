const n = 6;
const numbers = [11, 7, 5, 6, 10, 9];

function solution(n, numbers) {
  for (let i = 1; i < n; i++) {
    let j;
    const num = numbers[i];
    for (j = i - 1; j >= 0 && numbers[j] > num; j--) {
      numbers[j + 1] = numbers[j];
    }
    numbers[j + 1] = num;
  }
  return numbers.join(' ');
}

console.log(solution(n, numbers));
