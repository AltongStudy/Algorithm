function solution(level){
  return level === 0 ? '' : solution(parseInt(level / 2)) + parseInt(level % 2)
}

console.log(solution(11));