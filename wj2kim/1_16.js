/**
 * 문제 
 * 
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
 * 세요. 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
 */

/**
 * 접근 방법 
 * 
 * 1. 문자열을 set 자료구조로 만들면 바로 중복을 없앨 수 있다.
 */

 
function solution(str) {
   const noDuplication = new Set(...str);
   return [...noDuplication].join("");
}

const str = "ksekkset";

console.log(solution(str));

/**
 * 아쉬운 점
 * 
 * 1. 강의를 보니 array 객체에 새로 할당해주는 방식으로 풀었는데 좋은 방법이라 느꼈다.
 * 2. String Prototype의 indexOf 메소드가 정의 되어 있는걸 처음 알았다.
 */


/**
 * 개선 코드
 */

function solution(str) {
    let answer = "";
     
    for(let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            answer += str[i];
        }
    }
    return answer;
 }

const str = "ksekkset";

console.log(solution(str));
