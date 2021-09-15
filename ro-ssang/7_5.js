const [s, n] = [5, 9];
const works = [1, 2, 3, 2, 6, 2, 3, 5, 7];

function solution(s, n, works) {
  const cache = Array(s).fill(0);
  for (let i = 0; i < n; i++) {
    const work = works[i];
    const idx = cache.indexOf(work);
    if (idx >= 0) {
      // cache hit
      const num = works[idx];
      for (let j = idx - 1; j >= 0; j--) {
        cache[j + 1] = cache[j];
      }
      cache[0] = num;
    } else {
      // cache miss
      cache.unshift(work);
      cache.pop();
    }
  }
  return cache.join(' ');
}

console.log(solution(s, n, works));
