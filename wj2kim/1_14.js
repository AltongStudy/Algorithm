/**
 * 문제 
 * 
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 */

/**
 * 접근 방법 
 * 
 * 1. 문자열의 길이는 서로 다르기 떄문에 정답은 무조건 하나이다.
 * 2. 문자열이기 때문에 문자열인지 확인하는 절차가 필요하다.
 * 3. 반복문과 함께 String.prototype의 length 메소드를 사용하면 쉽게 해결 할 수 있다.
 */

 
function solution(arr) {
    let answer = "";
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i].length > answer.length ) {
            answer = arr[i];
        }
    }
    return answer;
}


const arr = [5, "teacher", "time", "student", "beautiful", "good"];

console.log(solution(arr));
