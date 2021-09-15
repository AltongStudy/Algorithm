// ✅ 7-5 LRU

// 🧑🏻‍💻 다른 문제 풀이 🧑🏻‍💻

function solution(size, arr) {
    console.log([...new Set(arr)]);
    return [...new Set(arr.reverse())].splice(0, size);
    
  }
  
  let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7, 2, 3 , 2];
  console.log(solution(5, arr));

// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(size, arr) {
  let answer = Array.from({length:size}, v => v=0)

  arr.forEach(x => {
    let pos = -1
    for(let i=0; i<size; i++) if(answer[i]===x) pos = i
    if(pos===-1)for(let j=size-1; j>=1; j--)answer[j]=answer[j-1]
    else for(let j=pos; j>=1; j--)answer[j]=answer[j-1]
    answer[0]=x
  });
  
  return answer;
  }
  let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
  console.log(solution(5, arr));