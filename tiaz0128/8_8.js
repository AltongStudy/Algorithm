function solution(n, m){
  const arr = Array.from({length : m}, () => 0)

  function DFS(level){
    if(level === n) {
      return
    }
    else {
      for(let i = 1; i <= n; i++){
        arr[level] = i;
        DFS(level + 1);
      }

    }
  }
  DFS(0)

  return false
}

console.log(solution(3, 3));