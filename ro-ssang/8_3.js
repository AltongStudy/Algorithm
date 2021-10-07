function solution() {
  const answer = [['전위순회:'], ['중위순회:'], ['후위순회:']];

  function recursive(x) {
    if (x >= 8) return;
    answer[0].push(x);
    recursive(x * 2);
    answer[1].push(x);
    recursive(x * 2 + 1);
    answer[2].push(x);
  }

  recursive(1);

  return answer.map((arr) => arr.join(' ')).join('\n');
}

console.log(solution());
