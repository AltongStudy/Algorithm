// 👨🏻‍🏫 강사님 문제 풀이 1 👨🏻‍🏫

function solution(s){
    let answer = "YES";
    let len = s.length;

    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i] !== s[len-i-1].split('').reverse().join('')) answer = "NO"
    }
    return answer;
}

let str =['found7',"time","study","Yduts",'emit',"7Dnuof"]
console.log(solution(str));


// 👨🏻‍🏫 강사님 문제 풀이 2 👨🏻‍🏫

function solution(s){
    let answer = "YES";
    s=s.toLowerCase().replace(/[^a-z]/g,'')
    if(s.split('').reverse().join('') !== s) return "NO"
    return answer;
}

let str ="found7, time:, study, Yduts;, emit, 7Dnuof"
console.log(solution(str));