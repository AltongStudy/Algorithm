function solution(a, b){
  const buffer = [...a]
  const arr =[...b]
  
  arr.forEach(item => {
    if(buffer.indexOf(item) === 0) buffer.shift()
  })

  return buffer.length === 0 ? "YES" : "NO"
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));