function solution(arr){
  let max = Number.MIN_SAFE_INTEGER
  let sum1 = sum2 = 0;

  // 행, 열 합 중에 가장 큰값
  for(let i = 0; i < arr.length; i++){
      sum1 = sum2 = 0;
      for(let j = 0; j < arr.length; j++){
          sum1 += arr[i][j]
          sum2 += arr[j][i]
      }
      max =  Math.max(sum1, sum2, max)
  }

  sum1 = sum2 = 0;
  
  // 두 대각선의 합과 행 열의 합 중에 가장 큰값
  for(let i = 0; i < arr.length; i++){
      sum1 += arr[i][i]
      sum2 += arr[arr.length - i - 1][i]
  }

  return max = Math.max(sum1, sum2, max)

}

console.log(
  solution([
        [10,13,10,12,15]
      , [12,39,30,23,11]
      , [11,25,50,53,15]
      , [19,27,29,37,27]
      , [19,13,30,13,19]
  ])
);