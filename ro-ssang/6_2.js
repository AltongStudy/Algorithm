const input = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

function solution(string) {
  const stack = [];
  for (let char of string) {
    if (char == ')') {
      while (true) {
        const topChar = stack.pop();
        if (topChar == '(') break;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}

console.log(solution(input));
