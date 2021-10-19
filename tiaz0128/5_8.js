function count(aMap, bMap){
  for(let [key, value] of aMap){
      if(bMap.get(key) !== value) return false;
  }
  return true;
}

function solution(a, b){
  let answer = 0;

  const aMap = new Map();
  const bMap = new Map();

  b.split('').forEach((ch) => {
    bMap.set(ch, bMap.has(ch) ? bMap.get(ch) + 1 : 1)
  })

  for(let idx = 0; idx < b.length - 1; idx++){
    aMap.set(a[idx], aMap.has(a[idx]) ? aMap.get(a[idx]) + 1 : 1)
  }

  for(let i = b.length - 1, j = 0; i < a.length; i++, j++){
    aMap.set(a[i], aMap.has(a[i]) ? aMap.get(a[i]) + 1 : 1)
    
    if(count(aMap, bMap)) answer++
    
    aMap.get(a[j]) === 1 ? aMap.delete(a[j]) : aMap.set(a[j], aMap.get(a[j]) - 1)
  }

  return answer;
}

let a="bacaAacba";
let b="abc";

console.log(solution(a, b));
