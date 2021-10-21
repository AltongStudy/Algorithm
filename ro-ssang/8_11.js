const n = 5;

function solution(n) {
  function factorial(x) {
    if (x == 0 || x == 1) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }

  return factorial(n);
}

console.log(solution(n));
