// 📝 6-6 공주구하기(큐)

const princes = 8
const num = 3
console.log(solution(princes,num));

// 🌟 문제 풀이 🌟

function solution(princes,num){
    let answer;
    let queue = Array.from(Array(princes), (_, idx) => idx + 1);
    let cnt = 0
    while(queue.length !== 1){
        cnt++
        if(cnt === num){
            queue.shift()
            cnt = 0
        }else{
            let princes = queue.shift()
            queue.push(princes)
        }
    }
    answer = queue[0]
    return answer;
}

// 🧑🏻‍💻 다른 문제 풀이 🧑🏻‍💻

const solution = (total, target) => {
  total = Array(total)
    .fill(null)
    .map((v, i) => i + 1);
  while (total.length > 1)
    for (let i = 0; i < target; i++)
      i == target - 1 ? total.shift() : total.push(total.shift());

  return total[0];
};


// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(princes,num){
    let answer;
    let queue = Array.from({length:princes}, (_, idx) => idx + 1);
    while (queue.length) {
        for(let i=1; i<num; i++) queue.push(queue.shift())
        queue.shift()
        if(queue.length === 1) answer = queue.shift()
    }
    return answer;
}
