// π¨π»βπ« κ°μ¬λ λ¬Έμ  νμ΄ 1 π¨π»βπ«

function solution(s){
    let answer = "YES";
    s=s.toLowerCase().replace(/[^a-z]/g,'')
    if(s.split('').reverse().join('') !== s) return "NO"
    return answer;
}

let str ="found7, time:, study, Yduts;, emit, 7Dnuof"
console.log(solution(str));
