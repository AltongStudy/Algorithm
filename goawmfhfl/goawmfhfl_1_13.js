
// 첫 번째 문제 풀이 
function solution(a){         
    let answer= "";
    for(let x of a){
        let num = x.charCodeAt()
        if(num>=97 && num<=122) answer+=String.fromCharCode(num-32)
        else answer+=String.fromCharCode(num+32)
    }
    return answer;
}
let arr = "StuDY"
console.log(solution(arr));

// 두 번째 문제 풀이
function solution(a){         
    let answer= "";
    for(let x of a){
        if(x === x.toUpperCase()) answer+=x.toLowerCase()
        else answer+=x.toUpperCase()
    }
    return answer;
}
let arr = "StuDY"
console.log(solution(arr));