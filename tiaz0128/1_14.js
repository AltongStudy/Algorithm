function solution(arr){
    return arr.reduce((prev, next)=> { 
        return prev.length > next.length ? prev : next
    }, '')
}

console.log(solution(["teacher","time","student","beautiful","good"]))