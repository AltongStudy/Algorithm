const input = '352+*9-';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

function solution(postfix) {
  const stack = [];
  for (let char of postfix) {
    if (/\d/.test(char)) {
      stack.push(Number(char));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      const result = calculator[char].call(null, a, b);
      stack.push(result);
    }
  }
  return stack[0];
}

console.log(solution(input));
