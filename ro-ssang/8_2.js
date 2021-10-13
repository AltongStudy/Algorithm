const n = 11;

function solution(n) {
  const answer = [];

  function recursive(x) {
    if (x == 0) return;
    recursive(Math.floor(x / 2));
    answer.push(x % 2);
  }

  recursive(n);

  return answer.join('');
}

console.log(solution(n));
