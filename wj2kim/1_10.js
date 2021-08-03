/**
 * 문제 
 * 
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개
 * 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 */

/**
 * 접근 방법 
 * 
 * 1. 특정문자가 문자열에 몇개 존재하는지 알아낼려면 문자열의 
 *    문자와 특정 문자를 무조건 한번씩은 비교할 수 밖에 없겠다는 생각이 들었다.
 * 2. 한번씩 비교하면 되기 때문에 for문을 사용해야겠다.
 */

 function solution(str, char) {
    let count = 0;
    for (let i = 0 ; i < str.length; i++) {
        if (str[i] === char) {
            count ++;
        }
    }
    return count;
}

const str = "COMPUTERPROGRAMMING";
const char = "R";

console.log(solution(str, char));