function solution(str){
  const stack = []

  for(ch of str){
    if(ch === '(') stack.push('(')
    else {
      if(stack.length === 0) return "NO"
      else stack.pop()
    }
  }

  return stack.length > 0 ? 'NO' : 'YES'
}

let a="(()(()))(()"
console.log(solution(a));