function solution(arr,s){
    let answer = 0;

    for(let x of arr){
        if(x === s) answer++
    }
    return answer;
}
let arr = "COMPUTERPROGRAMMING"

console.log(solution(arr,"R"));