/** 
 * 유효한 팰린드롬
 * 
 */

/**
 * 접근 방법
 * 
 * 1. 앞선 문제와 비슷해보인다.
 * 2. 먼저 String.toLowerCase() 함수를 통해 소문자로 만든다.
 * 4. String.replace 함수를 사용해서 문자열이 아닌것(정규표현식 사용)은 빈칸으로 replace 해준다.
 * 4. 앞선 문제처럼 비교를 한다.
 */

 function solution(str) { 
    const strOnly = str.toLowerCase().replace(/[^a-z]/g, '');
  console.log(strOnly);
    const length = strOnly.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (strOnly[i] !== strOnly[length-i-1]) {
          return 'No'
        }
      }
    return 'YES'
  }
  
  const str = 'founc7, timeLstdy: Yduts: emit, 7Dnuof';
  
  console.log(str);
  