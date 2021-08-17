// 🌟 문제 풀이 🌟

function solution(s){
    let answer = "NO"
    
    for(let i=0; i<s.length; i++){
        let lowerCase = s.toLowerCase()
        if(lowerCase.indexOf(lowerCase[0]) === lowerCase.indexOf(lowerCase[s.length-1])) answer="YES"
    }
    return answer;
}

console.log(solution("gooG"));

// 🧑🏻‍💻 다른 문제 풀이 🧑🏻‍💻

function solution(s) {
    const lowerStr = s.toLowerCase();
    if ([...lowerStr].reverse().join("") === lowerStr) {
    return "YES";
    }
    return "NO";
    }

    let str = "gooG"
    console.log(solution(str));


// 👨🏻‍🏫 강사님 문제 풀이 1 👨🏻‍🏫

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

// 👨🏻‍🏫 강사님 문제 풀이 2 👨🏻‍🏫

function solution(s){
    let answer = "YES"
    s=s.toLowerCase();
    if(s.split('').reverse().join('') !== s) return "NO"

    return answer;
}

let str = "gooG"
console.log(solution(str));