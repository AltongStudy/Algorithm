// 📝 6-2 괄호 문자 제거 (스택)
let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
// 🧑🏻‍💻 다른 문제 풀이 🧑🏻‍💻

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x !== ')') {
      stack.push(x);
    } else {
      let index = stack.lastIndexOf('(');
      stack.splice(index);
    }
  }
  answer = stack.join('');
  return answer;
}




// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(s){
let answer;
let stack = [];
for(let x of s){
  if(x === ')'){
      while(stack.pop()!=='(');
  }
  else stack.push(x)
}
answer = stack.join('')
return answer;
}
