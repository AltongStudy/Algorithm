function solution(arr){
  let max = Number.MIN_SAFE_INTEGER
  return arr.filter((height, i) => {
      if(height > max){
          max = height
          return true
      }

  }).length
}

console.log(solution([130,135,148,140,145,150,150,153]))