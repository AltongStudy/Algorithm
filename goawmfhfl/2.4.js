
// 🌟 풀어본 코드🌟

function solution(arr){
    let answer = 0;
    let count = 0;
    
for(let i=0; i<arr.length; i++){
    if(arr[i] === 1){
    count++
    answer += count
    }
    else{
    count = 0
    }
}
return answer;
}


let reportCard = [1,0,1,1,1,0,0,1,1,0]
console.log(solution(reportCard))