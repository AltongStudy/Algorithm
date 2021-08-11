/**
 * 문제 
 * 
 * 점수계산
 * 
 */

/**
 * 접근 방법
 * 
 * 1. 반환할 number 변수(A)를 0으로 초기화 시키고 누적시키자 
 * 2. 0이 나오면 0으로 초기화 되는 변수(B)를 먼저 0으로 초기화하자.
 * 2. 반복문을 통해서 0이 나오거나 반복문이 끝나면 변수 B를 factorial 함수로 factorial 값을 얻어낸 다음에 A에 누적시키자 
 * 
 */

function factorial(n) {
    if (n === 0||n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}
  
  
function solution(arr) {
    let total = 0;
    let sub = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            sub = sub + 1;
        } else {
            total = total + factorial(sub);
            sub = 0;
        }
    }
    return total + sub;
}
  
  
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));



/**
 * 아쉬운 점 
 * 
 * 강의를 보니 비슷하지만 factorial 함수를 사용하지 않고 더 심플하게 풀 수 있었다. 
 * 막상 풀때 생각이 안났어서 아쉬움 
 */

 function solution(arr) {
    let total = 0;
    let sub = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            sub++;
            total += sub;
        } else {
            sub++;
        }
    }
    return total;
}
  
  
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));