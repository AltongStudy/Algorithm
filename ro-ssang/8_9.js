const n = 3;
const coins = [1, 2, 5];
const m = 15;

// DFS 풀이
function solution(n, coins, m) {
  let answer = Number.MAX_SAFE_INTEGER;

  function recursive(count, sum) {
    if (count > answer) return;
    if (sum > m) return;
    if (sum == m) {
      if (answer > count) answer = count;
    } else {
      for (let i = 0; i < n; i++) {
        recursive(count + 1, sum + coins[i]);
      }
    }
  }

  recursive(0, 0);

  return answer;
}

// 다이나믹 프로그래밍 풀이
function solution2(n, coins, m) {
  const dy = Array(m + 1).fill(Number.MAX_SAFE_INTEGER);
  dy[0] = 0;
  for (let i = 0; i < n; i++) {
    const coin = coins[i];
    for (let j = coin; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin] + 1);
    }
  }
  return dy[m];
}

console.log(solution(n, coins, m));
