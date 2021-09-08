/**
 * 올바른 괄호
 *
 */

/**
 * 문제 접근 방법
 *
 * ( 괄호와 ) 괄호를 키값으로 삼아 갯수를 기록해 놓고 같으면 YES 아니면 NO를 출력한다
 *
 */

function solution(brackets) {
  const stack = {};

  [...brackets].forEach((b) => {
    if (stack[b] === undefined) {
      stack[b] = 0;
      return;
    }
    stack[b] += 1;
  });
  const value = Object.values(stack);
  return value[0] === value[1] ? "YES" : "NO";
}

const brackets = "(()(()))(()";

solution(brackets);

/**
 *
 * 강의를 보고 난 뒤 숫자로 비교하는것은 좋은 방법이 아니라는 것을 알아서 다시 풀었다.
 */

function solution2(brackets) {
  const stack = [];
  for (let b of brackets) {
    if (b === "(") {
      stack.push(b);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

const brackets = "(()(()))(()";

solution(brackets);
