function solution(arr){
    let sum = 0;
    let score = 0;

    arr.forEach((num) => {
        if(num === 1){
            return sum += ++score
        }
        return score = 0
    })
    return sum
}

console.log(solution([1,0,1,1,1,0,0,1,1,0]))