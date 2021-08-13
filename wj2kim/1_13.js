/**
 * 문제 
 * 
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자를 소문자로 소문자는 대문자로
 * 변환하여 출력하는 프로그램을 작성하세요.
 */

/**
 * 접근 방법 
 * 
 * 1. 1_12 와 매우 비슷한 방식으로 풀면 될것 같다. 
 * 2. 반복문을 통해 대문자는 -32, 소문자는 +32 로 string 을 새로 만들어 반환하도록 만들면 되겠다.
 * 3. ASCII 코드 대문자는 65번부터 90번까지고 소문자는 97번 부터 122번까지다.
 */

 
function solution(str) {
    let answer = "";
    for (let char of str) {
        const code = char.charCodeAt()
        if (code <= 122 && code >= 97) {
            answer += String.fromCharCode(code - 32);
        } 
        if ( code <= 90 && code >= 65) {
            answer += String.fromCharCode(code + 32);
        }
    }
    return answer;
}

const str = "StuDY";

console.log(solution(str));
