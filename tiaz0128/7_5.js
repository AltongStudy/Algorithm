// 1
function solution(size, arr){
  const result = Array.from({length: size}, () => 0)

  arr.forEach(x => {
    let p = result.indexOf(x)
    if(p === -1) {
      for(let i = size - 1; i >= 1; i--){
        result[i] = result[i-1]
      }
    } else {
      for(let i = p; i >= 1; i--){
        result[i] = result[i-1]
      }
    }
    result[0] = x
  })

  return result
}

// 2
function solution2(size, arr){
  const result = Array.from({length: size}, () => 0)

  arr.forEach((item) => {
    const idx = result.indexOf(item)
    if(idx === -1) {
      result.pop()
      result.unshift(item)
    } else {
      result.splice(idx, 1)
      result.unshift(item)
    }
  })
  return result;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
console.log(solution2(5, arr));