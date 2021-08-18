function solution(str, ch){
  const convertStr = str.split('')
  const result = []
  let idx = Number.MAX_SAFE_INTEGER;

  convertStr.forEach((item) => {
      idx = (item === ch ? 0 : ++idx)
      result.push(idx)
  })
  
  idx = Number.MAX_SAFE_INTEGER;

  convertStr.reverse().forEach((item, i) => {
    const target = result.length - 1 - i
    idx = (item === ch ? 0 : ++idx)
    
    if(result[target] > idx) result[target] = idx
  })

  return result
}

let str="teachermode";
console.log(solution(str, 'e'));