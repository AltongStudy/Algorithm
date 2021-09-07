const input = ['CBA', 'CBDAGE'];

const x = input[0];
const plan = input[1];

function solution(x, plan) {
  const queue = Array.from(x);
  for (let subject of plan) {
    if (queue.includes(subject)) {
      if (subject != queue.shift()) return 'NO';
    }
  }
  return queue.length == 0 ? 'YES' : 'NO';
}

console.log(solution(x, plan));
