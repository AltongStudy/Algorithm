/** 
 * 회문 문자열
 * 
 */

/**
 * 접근 방법
 * 
 * 1. 문자열을 모두 소문자로 전환한다.
 * 2. 문자열을 array형태로 만들어 복사한다 
 * 3. 복사한 array 을 array.reverse 를 통해서 순서를 바꾸고 다시 문자열로 바꾼다.
 * 4. 원본과 값이 같은지 비교한다.
 */

function solution(str) { 
  str = str.toLowerCase()
  const copyArr = [...str];
  return str === copyArr.reverse().join("")? 'YES' : 'NO'
}

const str = 'gooG';

console.log(str);

/**
 * 강의를 보고 난 후
 * 
 * 자바스크립트 내장 함수를 사용하지 않고 푸는 방법으로 다시 풀어 보았다.
 */

function solution(str) { 
  str = str.toLowerCase()
  const length = str.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] !== str[length-i-1]) {
      return 'No'
    }
  }
  return 'YES'
}

const str = 'gooG';