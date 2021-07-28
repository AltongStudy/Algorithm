function solution(arr){
    let answer = 0;
    for(let x of arr){
        let num = x.charCodeAt()
        if(num>=65 && num<=90) answer++
    }
    return answer;
}
let arr = "KoreaTimeGood"
console.log(solution(arr));