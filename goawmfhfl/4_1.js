
// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫
function solution(arr){
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER
    for(let x of arr){
        let sum = 0;
        let tmp = x;

        while(tmp){
            let splitNumber = tmp%10
            sum += splitNumber
            tmp = Math.floor(tmp/10)
        }
        if(sum>max){
            max = sum
            answer = x
        }
        else if (sum===max){
            if(x>answer) answer = x
        }
    }

    return answer;
}
let number = [128, 460, 603, 40, 521, 137, 123]
console.log(solution(number));