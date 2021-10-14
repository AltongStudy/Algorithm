function solution(m, arr){
  const len = arr.length
  const tmp = []
  let result = Number.MAX_SAFE_INTEGER;

  function DFS(level, sum){
    if(sum > m) return
    if(level >= result) return

    if(sum === m){
      return result = Math.min(result, level)
    } else {
      for(let i = 0; i < len; i++){
        tmp.push(arr[i])
        DFS(level + 1, sum + arr[i])
      }
    }
  }

  DFS(0, 0)

  return result;
}


let arr=[1, 2, 5];
console.log(solution(15, arr));