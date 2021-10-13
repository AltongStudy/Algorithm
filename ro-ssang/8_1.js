const n = 3;

function solution(n) {
  const answer = [];

  function recursive(count) {
    if (count > n) {
      return;
    } else {
      answer.push(count);
      recursive(count + 1);
    }
  }

  recursive(1);

  return answer.join(' ');
}

console.log(solution(n));
