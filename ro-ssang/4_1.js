const n = 7;
const numbers = [128, 460, 603, 40, 521, 137, 123];

function addDigit(number) {
  let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

// reduce 활용
function addDigit2(number) {
  return [...String(number)].reduce((a, b) => Number(a) + Number(b));
}

function solution(n, numbers) {
  let answer = 0;
  let maxSumOfDigit = 0;
  numbers.forEach((num) => {
    const sumOfDigit = addDigit(num);
    if (sumOfDigit >= maxSumOfDigit && num > answer) {
      maxSumOfDigit = sumOfDigit;
      answer = num;
    }
  });
  return answer;
}

console.log(solution(n, numbers));
