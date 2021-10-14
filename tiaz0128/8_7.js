function solution(n, m, ps, pt){
  let answer = Number.MIN_SAFE_INTEGER
  function DFS(level, sum, time){
    if(time > m) return
    if(level === n){
      console.log(sum)
      answer = Math.max(answer, sum)
      return
    }
    else {
      DFS(level + 1, sum + ps[level], time + pt[level])
      DFS(level + 1, sum, time)
    }
  }

  DFS(0, 0, 0)
  return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]

// 5문제 / 20제한시간 / 점수 / 시간
console.log(solution(5, 20, ps, pt));