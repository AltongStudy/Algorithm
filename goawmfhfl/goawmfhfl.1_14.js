function solution(a){         
    let answer= "";
    let min = Number.MIN_SAFE_INTEGER;
    for(let x of a){
        let length = x.length;
        if(length > min){
            min = length
            answer = x
        }
    }
    return answer;
}
let arr =["teacher","time","student","beautiful","good"]
console.log(solution(arr));