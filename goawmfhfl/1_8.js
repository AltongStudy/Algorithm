function solution(arr){
    let answer = [];
    let sum = 0;

    for(let x of arr){
        sum+=x
    }

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(sum - (arr[i]+arr[j]) === 100){
                arr.splice(j,1)
                arr.splice(i,1)
            }
        }
    }

    answer.push(arr)
    return answer
}

let arr = [20,7,23,19,10,15,20,8,13]
console.log(solution(arr));