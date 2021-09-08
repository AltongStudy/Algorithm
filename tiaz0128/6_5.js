function solution(a){
  const buffer = []
  let cnt = 0;
  a.split('').forEach((item, idx, arr) => {
    if(item === '(') {
      buffer.push(item)
    } else {
      buffer.pop()
      cnt += arr[idx - 1] === '(' ? buffer.length : 1;
    }
  })

  return cnt;
}

let a='(((()(()()))(())()))(()())'
console.log(solution(a));