/**
 * 문제 
 * 
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 
 * 프로그램을 작성하세요.
 */

/**
 * 접근 방법 
 * 
 * 1. 보자마자 ES2021 스펙에 추가되는 String.replaceAll 함수가 생각났다.
 * 2. String을 split("") 하여 array로 만들고 map() iterate하면서 'A' 일때, 
 *    해당 값을 '#'으로 바꿔서 새로운 array를 만들어 string으로 바꿔주면 해결 할 수 있을것 같다.
 * 3. 정규표현식을 사용해서 replace 시켜주는 방법으로도 해결 할 수 있을것 같다. 
 * 4. 그냥 간편하게 1번 방법으로 풀자.
 */

function solution(str, replace, replaceTo) {
    return str.replaceAll(replace, replaceTo);
}

const str = "BANANA";

console.log(solution(str, 'A', '#'));