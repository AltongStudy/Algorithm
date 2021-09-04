// 🌟 문제 풀이 🌟

function solution(s,t){
    let answer = new Array(s.length).fill(0)
    let cnt = 1000;

    for(let i=0; i<s.length; i++){
        if(s[i] === t) {
            cnt = 0;
            answer[i] = cnt
        }
        else{
            cnt ++
            answer[i] = cnt
        }
    }
    console.log(answer);

    cnt = 1000

    for(let i=s.length-1; i>=0; i--){
        if(s[i] === t){
            cnt = 0
            answer[i] = cnt
        }
        else{
            cnt++
            answer[i]= Math.min(answer[i],cnt)
        }
    }

    return answer;
}

let str = "teachermode"
console.log(solution(str,'e'));