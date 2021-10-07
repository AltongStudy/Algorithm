// 🌟 문제 풀이 🌟

function solution(s){
    let answer = [];
    let cnt = 1;

    for(let i=0; i<s.length; i++){
        if (s[i]===s[i+1])cnt++
        else{
            answer.push(s[i])
            if(cnt>1) answer.push(String(cnt))
            cnt = 1
        }
    }
    return answer.join('');
}

let str = "KKHSSSSSSSE"
console.log(solution(str));