/**
 * 괄호 문자 제거
 *
 */

/**
 * 문제 접근 방법
 *
 * ")" 을 제외한 나머지 문자들은 stack에 쌓아 놓는다
 * ")" 이 나오면 stack의 뒤에서부터 "("를 찾는다
 * "(" 를 찾게되면 찾을때까지의 count 수 만큼 stack을 pop 시켜준다.
 *  한번 찾으면 break를 걸어서 빠져나온다.
 */

function solution(brackets) {
  const stack = [];
  for (let b of brackets) {
    if (b === ")") {
      for (let i = stack.length; i >= 0; i--) {
        if (stack[i] === "(") {
          let count = stack.length - i;
          while (count !== 0) {
            stack.pop();
            count--;
          }
          break;
        }
      }
    } else {
      stack.push(b);
    }
  }

  return stack;
}

const brackets = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

solution(brackets);

/**
 *
 * 강의를 통해
 *
 * while(stack.pop()!=="(") 코드를 보았는데 이렇게 하면 처음에 ")"로 시작하는 문자열은 무한루프에 빠지게될텐데 의문이다.
 *
 */
