function solution(n, m){
  const arr = Array.from({length : m}, () => 0)
  const result = []

  function DFS(level){
    if(level === m) {
      return result.push([...arr])
    }
    else {
      for(let i = 1; i <= n; i++){
        arr[level] = i;
        DFS(level + 1);
      }

    }
  }
  DFS(0)

  return result
}

console.log(solution(3, 2));