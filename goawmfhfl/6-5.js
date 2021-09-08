// 📝 6-5 쇠막대기

let str = '()(((()())(())()))(())'
console.log(solution(str));

// 🌟 문제 풀이 🌟
function solution(str){
    let answer = 0;
    let stack = []

    for(let i=0; i<str.length; i++){
        if(str[i] === ')'){
            if(str[i-1] === '('){
                stack.pop()
                answer+=stack.length;
            }
            else{
                stack.pop()
                answer+=1
            }
        }
        else stack.push(str[i])
    }
    return answer;
}



// 🧑🏻‍💻 다른 문제 풀이 🧑🏻‍💻
function solution(s) {
    const bracket = Array.from(s);
    let answer = 0
    let stack = [];

    bracket.map((value, index, array) => {
    if (value === '(') {
        stack.push(value);
    } else {
        const prevalue = array[index - 1];
        stack.pop();
        if (prevalue == '(') {
        answer += stack.length;
        } else {
        answer += 1;
        }
    }
});
return answer;
}


// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫
function solution(s){
    let answer=0;
    let stack = []

    for(let i=0; i<s.length; i++){
        if(s[i]==='(') stack.push(s[i])
        else{
            stack.pop()
            if(s[i-1] === '(') answer+=(stack.length);
            else answer+=1
        }
    }
    return answer;
}
