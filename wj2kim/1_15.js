/**
 * 문제 
 * 
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 */

/**
 * 접근 방법 
 * 
 * 1. 전체 길이 / 2 를 해서 나오는 숫자가 정수면 짝수 아니라면 홀수
 * 2. 홀수면 해당 숫자를 반올림처리 (Math.floor) 한 수를 index 삼아 문자를 추출하면 되고
 * 3. 정수로 떨어지면 해당 숫자와 해당 숫자 - 1 을 index 삼아 문자를 추출 하면 되겠다. 
 */

 
function solution(str) {
    let answer = "";
    const middle = str.length / 2;
    const isEven = Number.isInteger(middle);
	const arr = [...str];

    return isEven ? arr[middle - 1] + arr[middle] : arr[Math.floor(middle)];
}


const str = "study";

console.log(solution(str));