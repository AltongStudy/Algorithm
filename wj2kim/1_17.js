/**
 * 문제 
 * 
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
 * 출력하는 문자열은 원래의 입력순서를 유지합니다.
 */

/**
 * 접근 방법 
 * 
 * 1. array 중복 제거는 Array.ProtoType.filter 메소드를 사용하면 쉽게 해결할 수 있다.
 * 2. filter 함수를 이용해 string 이면서 indexOf 조건을 만족 시키는 값을 return 시키자.
 */

function solution(arr) {
    
    return arr.filter((word, index) => typeof word === 'string' && arr.indexOf(word) === index );
}

const arr = [5, "good", "time", "good", "time", "student"];

console.log(solution(arr));


