// π λ¬Έμ  νμ΄ π

function solution(arr){
    let answer = ''

    for(let x of arr){
        if(!isNaN(x)) answer+=x
    }   
    return parseInt(answer);
}

let str = "g0en2R0s8eSoft"
console.log(solution(str));

// π¨π»βπ« κ°μ¬λ λ¬Έμ  νμ΄ π¨π»βπ«

function solution(string){
    let answer = 0;

    for(let x of string){
        if(!isNaN(x)) answer = answer*10+Number(x);
        }   
    return parseInt(answer);
}

let str = "g0en2R0s8eSoft"
console.log(solution(str));