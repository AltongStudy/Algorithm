/**
 * 문제 
 * 
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇개 있는지 알아내는 프로그램을 작성하세요
 */

/**
 * 접근 방법 
 * 
 * 1. 1_10 문제와 비슷하게 반복문을 돌면서 하나씩 꺼내어 대문자 처리한 의미의 값과 같은지 비교 
 * 2. 총 length와 정규표현식으로 소문자를 걸러낸 대문자들의 length를 구하면 총 개수 
 * 3. 정규표현식을 사용해서 더 깔끔하게 작성할 수 있을것 같아 2번째를 사용해서 풀어보겠다.
 */

 
function solution(str) {
	return str.match(/[A-Z]/g).length;
}


const str = "KoreaTimeGood";

console.log(solution(str));

/**
 * 아쉬운 점
 * 
 * 1. 강의를 보니 for 반복문을 돌면서 비교를 하는데 charCodeAt 메소드를 사용했다. 
 *    chatCodeAt 을 사용해서 해당 char의 아스키 코드 번호를 추출할 수 있다. 
 *    추출한 아스키 코드를 이용하여 판단을 하면 된다. 
 *    대문자 알파벳 65번 ~ 90번 , 소문자 알파벳 97번 ~ 122번
 */