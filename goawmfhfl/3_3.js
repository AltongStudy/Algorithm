// 🌟 문제 풀이 🌟

function solution(arr){
    let answer = ''

    for(let x of arr){
        if(!isNaN(x)) answer+=x
    }   
    return parseInt(answer);
}

let str = "g0en2R0s8eSoft"
console.log(solution(str));

// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(string){
    let answer = 0;

    for(let x of string){
        if(!isNaN(x)) answer = answer*10+Number(x);
        }   
    return parseInt(answer);
}

let str = "g0en2R0s8eSoft"
console.log(solution(str));
