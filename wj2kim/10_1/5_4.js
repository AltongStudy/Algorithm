/**
 * 문제
 *
 * 부분 집합 구하기(이진트리 DFS)
 *
 */

/**
 * 접근 방법
 *
 * n 만큼의 길이 + 1로 배열을 초기화 해준다.
 * DFS 로직에서 한갈래는 집합에 포함시키는 의미로 1로 초기화하고
 * 다른 갈래에서는 0으로 초기화 한다.
 *
 */

function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let temp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          temp += i + " ";
        }
        temp.length && answer.push(temp.trim());
      }
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

solution(3);
