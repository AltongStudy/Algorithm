const input = [8, 3];

const [n, k] = input.map(Number);

function solution(n, k) {
  const queue = Array.from(Array(n), (_, idx) => idx + 1);
  let count = 0;
  while (queue.length > 1) {
    const prince = queue.shift();
    count++;
    if (count == k) {
      count = 0;
    } else {
      queue.push(prince);
    }
  }
  return queue[0];
}

console.log(solution(n, k));
