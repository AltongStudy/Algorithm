// 첫 번째 문제 풀이
function solution(a){         
    let answer= "";

    for(let x of a){
        if(x === x.toLowerCase()) answer+=x.toUpperCase()
        else answer+=x
    }
    return answer;
}
let arr = "itisTimeToStudy"
console.log(solution(arr));

// 두 번째 문제 풀이
function solution2(s){
    let answer = "";
    for(let x of s){
        let num = x.charCodeAt()
        if(num >=97 && num <= 122) answer += String.fromCharCode(num-32);
        else answer +=x;
    }
    return answer;
}
let arr2 = "itisTimeToStudy"
console.log(solution2(arr));