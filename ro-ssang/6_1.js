const input = '(()(()))(()';

function solution(string) {
  const stack = [];
  for (let char of string) {
    if (char == '(') {
      stack.push(char);
    } else {
      if (stack.length == 0) return 'NO';
      stack.pop();
    }
  }
  return stack.length == 0 ? 'YES' : 'NO';
}

console.log(solution(input));
