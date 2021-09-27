function solution(arr){
  return arr.filter((n, i) => {
      if(i === 0) return true
      else return arr[i - 1] < n 
  })
}

console.log(solution([7,3,9,5,6,12]))