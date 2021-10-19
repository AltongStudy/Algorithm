function solution(str){
  const tmp = str.split('');
  const map = new Map();

  tmp.forEach((student) => {
      if(map.has(student))  map.set(student, map.get(student) + 1)
      else map.set(student, 1)
  })

  let max = Number.MIN_SAFE_INTEGER;
  let answer = ''
  for(let [key, value] of map){
      if(max < value){
          max = value
          answer = key
      }
  }

  return answer
}

let str="BACBACCACCBDEDE";
console.log(solution(str));