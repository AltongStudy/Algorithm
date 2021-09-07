const input = '(((()(()()))(())()))(()())';

function solution(parenthesis) {
  let count = 0;
  const stack = [];
  for (let i = 0; i < parenthesis.length; i++) {
    if (parenthesis[i] == '(') {
      stack.push(parenthesis[i]);
    } else {
      stack.pop();
      if (parenthesis[i - 1] == '(') {
        // ()
        count += stack.length;
      } else {
        // ))
        count += 1;
      }
    }
  }
  return count;
}

console.log(solution(input));
