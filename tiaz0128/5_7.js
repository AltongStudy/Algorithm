
function solution(a, b){
  const aMap = new Map();
  const bMap = new Map();

  for(let i = 0; i < a.length; i++){
    aMap.set(a[i], aMap.has(a[i]) ? aMap.get(a[i] + 1) : 1)
    bMap.set(b[i], bMap.has(b[i]) ? aMap.get(b[i] + 1) : 1)
  }

  for(let [key, value] of aMap){
      if(bMap.get(key) !== value) return 'NO'
  }

  return 'YES'
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));