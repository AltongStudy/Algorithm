
// 🌟 강의를 보고 풀어본 정답 🌟

{
function solution(a,b){
    let answer = "";
    for(let i =0; i<a.length; i++){
        if(a[i] === b[i]) answer +=`${" D"}`
        else if(a[i]===1 && b[i] === 3) answer +=`${" A"}`
        else if(a[i]===2 && b[i] === 1) answer +=`${" A"}`
        else if(a[i]===3 && b[i] === 2) answer +=`${" A"}`
        else answer +=`${" B"}`
    }
    return answer;
}
let a = [2, 3, 3, 1, 3]
let b = [1, 1, 2, 2, 3]
console.log(solution(a,b));
}

// 🌟 다른 사람들의 코드를 보고 배운 코드 🌟

{
function solution(A, B) {
    for(let i = 0; i < A.length; i++) {
    if(A[i] === 1) {
        console.log(answer = B[i] === 1 ? "D" : B[i] === 2 ? "B" : "A"); 
    }else if(A[i] === 2) {
        console.log(answer = B[i] === 2 ? "D" : B[i] === 1 ? "A" : "B");
    }else {
        console.log(answer = B[i] === 3 ? "D" : B[i] === 1 ? "B" : "A");
    }
        }
    }
    let A = [2,3,3,1,3];
    let B = [1,1,2,2,3];
    solution(A,B);
}