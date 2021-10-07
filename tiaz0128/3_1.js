function solution(str){
  const reg = new RegExp(`${str}`, 'gi')
  return reg.test(str.split('').reverse('').join('')) ? 'YES' : 'NO'
}

let str = "gooG";
console.log(solution(str));