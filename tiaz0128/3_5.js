function solution(str){
  const strArr = str.split('')
  let result = ''
  let cnt = 1;

  strArr.forEach((item ,idx, arr) => {
      if(item !== arr[idx+1]){
          result += item + (cnt === 1 ? '' : cnt)
          cnt = 1
      } else {
          cnt++
      }
  })

//   for(let i = 0; i < strArr.length; i++){
//       if(strArr[i] !== strArr[i+1]){
//           result += strArr[i] + (idx === 1 ? '' : idx)
//           idx = 1
//       } else {
//           idx++
//       }
//   }

  return result
}
let str="KKHSSSSSSSE";
console.log(solution(str));