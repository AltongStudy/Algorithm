function solution(arr){
  arr.sort((a, b) => {
    return a[0] - b[0] || a[1] - b[1]
  })

  return arr
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));