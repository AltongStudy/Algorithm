// indexOf를 활용한 문제 풀이

function solution(s){
    let answer=[];
    for(let i=0; i<s.length; i++){
        if(i === s.indexOf(s[i])) answer.push(s[i])
    }
    return answer;
}

let str = ["good","time","good","time","student"];
console.log(solution(str));

// filter를 활용한 문제 풀이

function solution(s){
    let answer;
    answer = s.filter((v,i)=>{
        return s.indexOf(v)===i
    })
    return answer;
}

let str = ["good","time","good","time","student"];
console.log(solution(str));