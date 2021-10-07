const n = 15;
const votes = 'BACBACCACCBDEDE';

// Object 활용
function solution(n, votes) {
  let answer;
  let max = 0;
  const result = Array.from(votes).reduce((obj, candidate) => {
    obj[candidate] = obj[candidate] + 1 || 1;
    return obj;
  }, {});
  for (let candidate in result) {
    if (result[candidate] > max) {
      max = result[candidate];
      answer = candidate;
    }
  }
  return answer;
}

// Map 활용
function solution2(n, votes) {
  let answer;
  let max = 0;
  const hashTable = new Map();
  for (let candidate of votes) {
    hashTable.set(candidate, hashTable.get(candidate) + 1 || 1);
  }
  for (let [candidate, count] of hashTable) {
    if (count > max) {
      answer = candidate;
      max = count;
    }
  }
  return answer;
}

console.log(solution(n, votes));
