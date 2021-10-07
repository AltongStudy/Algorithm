const [n, m] = [4, 3];
const tests = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

function solution(n, m, tests) {
  // const result = []; // [(멘토, 멘티), (멘토, 멘티), ...]
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let mentees = Array.from(Array(n), (_, idx) => idx + 1);
    for (let j = 0; j < m; j++) {
      let index = tests[j].indexOf(i + 1);
      for (let k = 0; k < index; k++) {
        mentees = mentees.filter((v) => v != tests[j][k]);
      }
    }
    answer += mentees.length - 1;
    // (멘토, 멘티)가 누구인지 확인
    // mentees.forEach((mentee) => {
    //   if (mentee != i + 1) {
    //     result.push(`(${i + 1}, ${mentee})`);
    //   }
    // });
  }
  // console.log(result.join(', '));
  return answer;
}

console.log(solution(n, m, tests));
