function solution(rawStr){
  const str = rawStr.replace(/[^a-z]/gi, '');
  const reg = new RegExp(`${str}`, "gi")

  return reg.test(str.split('').reverse('').join('')) ? 'YES' : 'NO'
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));