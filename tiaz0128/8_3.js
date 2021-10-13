function solution(level){
  const arr = []

  function DFS(level){
    if(level > 7) return;
    else {
      arr.push(level)
      DFS(level * 2)
      DFS(level * 2 + 1)


      // DFS(level * 2)
      // arr.push(level)
      // DFS(level * 2 + 1)


      // DFS(level * 2)
      // DFS(level * 2 + 1)
      // arr.push(level)
    }
  }

  DFS(1)

  return arr.join(' ')
}

console.log(solution(1));