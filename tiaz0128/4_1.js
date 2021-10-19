function solution(arr){ 
  let max = Number.MIN_SAFE_INTEGER
  let result = 0

  arr.forEach((item) => {
      let tmp = [...new Number(item).toString()].reduce((prev, next) => {
          return prev + parseInt(next)
      }, 0)

      if( max <= tmp && item > result){
          max = tmp
          result = item
      }
  })

  return result
}

console.log(solution([128,460,603,40,521,137,123]))