const [n, m] = [9, 3];
const musics = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(n, m, musics) {
  let answer;
  let left = Math.max.apply(null, musics);
  let right = musics.reduce((a, b) => a + b);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 1;
    let size = 0;
    for (let i = 0; i < n; i++) {
      if (size + musics[i] <= mid) {
        size += musics[i];
      } else {
        size = musics[i];
        count++;
      }
    }
    if (count <= m) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(n, m, musics));
