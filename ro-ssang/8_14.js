const [n, m] = [4, 2];

function solution(n, m) {
  const answer = [];
  const arr = [];

  function recursive(count, start) {
    if (count == m) {
      answer.push(arr.join(' '));
    } else {
      for (let i = start; i <= n; i++) {
        arr.push(i);
        recursive(count + 1, i + 1);
        arr.pop();
      }
    }
  }

  recursive(0, 1);
  answer.push(answer.length);

  return answer.join('\n');
}

console.log(solution(n, m));
