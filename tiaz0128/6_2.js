
function solution(str){
  let stack = []

  for(ch of str){
    if(ch === ')') stack.splice(stack.lastIndexOf('('))
    else stack.push(ch)
  }

  return stack.join('')
}

function solution2(str){
  while(str.match(/\(/g)){
    str = str.replace(/\(([A-Z]+)\)/g, '')
  }
  return str
}


let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(solution(str));
console.log(solution2(str));