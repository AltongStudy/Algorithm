/**
 * 문제
 *
 * 이진수 출력(재귀)
 *
 */

/**
 * 접근 방법
 *
 * 재귀함수를 이용하여 주어진 수를 2로 나누어 매개변수로 넣는다.
 * 이때 나머지 몫을 answer 에 누적한다.
 */

function solution(n) {
  let answer = "";

  function DFS(n) {
    if (n === 0) {
      return;
    } else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  }

  DFS(n);
  return answer;
}

solution(11);
