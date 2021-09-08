function solution(n, k){
  const queue = Array.from([1,2,3,4], (_, i) => i);

  for(let i = 1; queue.length > 1; i++){
    console.log(queue, i)
    if(i % k === 0) queue.shift()
    else queue.push(queue.shift())
  }
  return queue[0]
}

console.log(solution(8, 3));