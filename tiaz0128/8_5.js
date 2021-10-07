function solution(arr) {
  const len = arr.length;
  let result = 'NO'

  const tot = arr.reduce((a, b) => a + b, 0)
  let flag = false;

  function DFS(level, sum){
    if(flag) return
    if(level === len){
      console.log(sum)
      if(tot - sum === sum) {
        result = 'YES'
        flag = true
      }
    } else {
      DFS(level + 1, sum + arr[level])
      DFS(level + 1, sum)
    }
  }

  DFS(0, 0)
  return result
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));