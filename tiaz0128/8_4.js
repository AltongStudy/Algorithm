function solution(n){

  const result = []
  const check = Array.from({length : n + 1}, () => 0)

  function DFS(level){
    if(level === n + 1) {
      let tmp = ''
      for(let i = 1; i <= n; i++){
        if(check[i] === 1) tmp += i + " "
      }
      if(tmp.length > 0) result.push(tmp.trim())
    } else {
      check[level] = 1
      DFS(level+1)
      check[level] = 0
      DFS(level+1)
    }
  }

  DFS(1)

  return result
}

console.log(solution(3));
