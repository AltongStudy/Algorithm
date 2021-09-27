const [n, k] = [10, 3];
const cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function solution(n, k, cards) {
  const sum = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum.add(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  const result = [...sum].sort((a, b) => b - a);
  return result[k - 1];
}

console.log(solution(n, k, cards));
