// π λ¬Έμ  νμ΄ π

function solution(s){
    let answer = "NO"
    const lowerCase = s.toLowerCase()

    for(let i=0; i<s.length; i++){
        if(lowerCase.indexOf(lowerCase[0]) === lowerCase.indexOf(lowerCase[s.length-1])) answer="YES"
    }
    return answer;
}

console.log(solution("gooG"));

// π§π»βπ» λ€λ₯Έ λ¬Έμ  νμ΄ π§π»βπ»

function solution(s) {
    const lowerStr = s.toLowerCase();
    if ([...lowerStr].reverse().join("") === lowerStr) {
    return "YES";
    }
    return "NO";
    }

    let str = "gooG"
    console.log(solution(str));


// π¨π»βπ« κ°μ¬λ λ¬Έμ  νμ΄ 1 π¨π»βπ«

function solution(s){
    let answer = "YES"
    s=s.toLowerCase();
    let len = s.length;
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i]!==s[len-i-1]) return "NO"
    }
    return answer;
}

let str = "gooG"
console.log(solution(str));

// π¨π»βπ« κ°μ¬λ λ¬Έμ  νμ΄ 2 π¨π»βπ«

function solution(s){
    let answer = "YES"
    s=s.toLowerCase();
    if(s.split('').reverse().join('') !== s) return "NO"

    return answer;
}

let str = "gooG"
console.log(solution(str));
