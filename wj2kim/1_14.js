/**
 * 문제 
 * 
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 */

/**
 * 접근 방법 
 * 
 * 1. N개의 문자열 중 가장 긴 문자열을 반환하면 될것 같다. 
 * 2. 문자열 length 의 max 값을 구하면 된걸 같다.
 * 2. 반복문을 통해 다음 값과 비교를 하고 max 값을 구하고 반환하자 
 */

 
function solution(num, arr) {
	let max = 0;

    for(let i = 0; i < arr.length; i++) {
        if (max < arr[i].length) {
            max = arr[i].length;
        }
    }
    return max;
}


const num = 5;
const arr = [teacher, time, student, beautiful, good];

console.log(solution(num, arr));

/**
 * 아쉬운 점
 * 
 * 1. num 는 굳이 왜있지?
 */