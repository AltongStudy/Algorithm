function count(songs, mid){
  let sum = 0
  let cnt = 1;

  songs.reduce((a, b) => {
    sum += b;

    if(sum > mid) {
      sum = b;
      cnt++;
    }
    return sum
  }, 0)

  return cnt;
}

function solution(recordCnt, songs){
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b);
  let result = -1;

  while(lt <= rt){
    let mid = parseInt((lt + rt) / 2);
    const cnt = count(songs, mid)
    
    if(cnt <= recordCnt)  { 
      result = mid
      rt = mid - 1;
    } else { 
      lt = mid + 1; 
    }
  }
  return result;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));