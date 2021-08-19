/**
 * 문제 
 * 
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 
 * 하는 프로그램을 작성하세요.
 */

/**
 * 접근 방법 
 * 
 * 1. 자바스크립트 String Prototype 메소드인 toUpperCase 를 사용하면 매우 간단하게 풀 수 있는 문제이다.
 * 2. 1_11 강의에서 배운 charCodeAt을 응용해보기 - 반복문을 돌면서 소문자 일때 대문자로 바꿔주자 
 * 3. 대문자로 바꿀때 toUpperCse 메소드를 사용하면 반복문을 도는 의미가 없으니 다른 방식으로 바꿔보자 
 * 4. String Prototype의 fromCharCode() 메소드를 통해 아스키 넘버를 인자로 주면 코드에 맞는 아스키 유닛을 string으로 넘겨준다고 한다. 
 * 5. 대문자에서 소문자는 +32 의 규칙이 있으니 이용해보자 
 * 6. ASCII 코드 소문자는 97번 부터 122번까지다.
 */

 
function solution(str) {
    let answer = "";
    for (let char of str) {
        const code = char.charCodeAt()
        if (code <= 122 && code >= 97) {
          answer += String.fromCharCode(code - 32);
        } else {
          answer += char;
        }
    }
  return answer;
}

const str = "ItisTimeToStudy";

console.log(solution(str));
