const [n, m] = [3, 2];

function solution(n, m) {
  const answer = [];
  const arr = [];

  function recursive(count) {
    if (count == m) {
      answer.push(arr.join(' '));
    } else {
      for (let i = 1; i <= n; i++) {
        arr.push(i);
        recursive(count + 1);
        arr.pop();
      }
    }
  }

  recursive(0);

  answer.push(answer.length);
  return answer.join('\n');
}

console.log(solution(n, m));
