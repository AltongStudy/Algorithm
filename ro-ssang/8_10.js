const [n, m] = [3, 2];
const numbers = [3, 6, 9];

function solution(n, m, numbers) {
  const answer = [];
  const arr = [];
  const check = Array(n).fill(0);

  function recursive(count) {
    if (count == m) {
      answer.push(arr.join(' '));
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] == 1) continue;
        check[i] = 1;
        arr.push(numbers[i]);
        recursive(count + 1);
        check[i] = 0;
        arr.pop();
      }
    }
  }

  recursive(0);

  answer.push(answer.length);
  return answer.join('\n');
}

console.log(solution(n, m, numbers));
