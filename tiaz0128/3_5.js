function solution(str){
  const strArr = str.split('')
  let result = ''
  let idx = 1;

  for(let i = 0; i < strArr.length - 1; i++){
      if(strArr[i] !== strArr[i+1]){
          result += strArr[i] + (idx === 1 ? '' : idx)
          idx = 1
      } else {
          idx++
      }
  }

  return result
}
let str="KKHSSSSSSSE";
console.log(solution(str));