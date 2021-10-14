function solution(m, arr){
  const result = []
  const len = arr.length
  const check = Array.from({length: len}, () => 0)
  const tmp = Array.from({length: m}, () => 0)

  function DFS(level){
    if(level === m){
      return result.push([...tmp]) //console.log(tmp)
    } else {
      for(let i = 0; i < len; i++){
        if(check[i] === 0) {
          check[i] = 1;
          tmp[level] = arr[i]
          DFS(level + 1)  
          check[i] = 0
        }
      }
    }
  } 

  DFS(0)
  return result
}

let arr=[3, 6, 9];
console.log(solution(2, arr));