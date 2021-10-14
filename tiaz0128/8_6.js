function solution(c, arr){
  let result = Number.MIN_SAFE_INTEGER;
  
  function DFS(level, sum){
    if(sum > c) return
    if(level === arr.length){
      result = Math.max(result, sum)
      return;
    } else {
      DFS(level + 1, sum + arr[level])
      DFS(level + 1, sum)
    }
  }

  DFS(0, 0)

  return result
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));