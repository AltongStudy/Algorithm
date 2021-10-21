const [n, r] = [33, 19];

function solution(n, r) {
  const dy = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

  function combination(n, r) {
    if (dy[n][r]) return dy[n][r];
    if (r == 0 || n == r) {
      return 1;
    } else {
      dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);
      return dy[n][r];
    }
  }

  return combination(n, r);
}

console.log(solution(n, r));
