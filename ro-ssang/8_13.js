const [n, f] = [4, 16];

function combination(n, r, arr) {
  if (arr[n][r]) return arr[n][r];
  if (r == 0 || n == r) {
    return 1;
  } else {
    return combination(n - 1, r - 1, arr) + combination(n - 1, r, arr);
  }
}

function solution(n, f) {
  let answer;
  let flag = false;
  const dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const p = [];
  const b = Array(n).fill(0);
  const check = Array(n + 1).fill(0);

  function recursive(count, sum) {
    if (flag) return;
    if (count == n && sum == f) {
      flag = true;
      answer = p.join(' ');
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i]) continue;
        check[i] = 1;
        p.push(i);
        recursive(count + 1, sum + p[count] * b[count]);
        check[i] = 0;
        p.pop(i);
      }
    }
  }

  // 이항 계수 배열 초기화
  for (let i = 0; i < n; i++) {
    b[i] = combination(n - 1, i, dy);
  }

  recursive(0, 0);

  return answer;
}

console.log(solution(n, f));
