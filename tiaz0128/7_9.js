function solution(arr){
  const timeTable = [];
  
  arr.forEach(guest => {
    timeTable.push([guest[0], 's'])
    timeTable.push([guest[1], 'e'])
  })

  timeTable.sort((a, b) => {
    return a[0] - b[0] || a[1].charCodeAt() - b[1].charCodeAt()
  })

  let max = 0;
  let cnt = 0;
  timeTable.forEach((time) => {
    if(time[1] === 's') cnt++;
    else cnt--;

    if(max < cnt) max = cnt;
  })

  return max;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
