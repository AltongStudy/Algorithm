// 📝 6-1 올바른 괄호 (스택)
let str = '((()))(('
console.log(solution(str));
// 🌟 문제 풀이 🌟

function solution(s){
    let answer = "YES";
    let stack = [];
    for(let x of s){
        if( x === '('){
            stack.push(x);
        }
        else{
        if(stack.length===0) return "NO";
            stack.pop(x);
        }
    }
    if(stack.length > 0) return "NO"
    return answer;
}

