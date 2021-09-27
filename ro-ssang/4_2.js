const n = 9;
const numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100];

function reverse(number) {
  let reversedNumber = 0;
  while (number) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reversedNumber;
}

// 내장 메서드 reverse 활용
function reverse2(number) {
  const reversedNumber = [...number.toString()].reverse().join('');
  return Number(reversedNumber);
}

function isPrimeNumber(number) {
  if (number === 1) {
    return false;
  }
  const start = 2;
  const end = Math.sqrt(number);
  for (let i = start; i <= end; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, numbers) {
  const reversedNumbers = numbers.map(reverse);
  const primeNumbers = reversedNumbers.filter(isPrimeNumber);
  return primeNumbers.join(' ');
}

console.log(solution(n, numbers));
