const n = 3;

function solution(n) {
  const answer = [];
  const arr = [];

  function recursive(count) {
    if (count > n) {
      if (arr.length > 0) {
        answer.push(arr.join(' '));
      }
    } else {
      arr.push(count);
      recursive(count + 1);
      arr.pop();
      recursive(count + 1);
    }
  }

  recursive(1);

  return answer.join('\n');
}

console.log(solution(n));
