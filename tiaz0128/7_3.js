function solution(arr){
  const len = arr.length;
  for(let i = 0; i < len - 1; i++){
    for(let j = 0; j < len - 1 - i; j++){
      if(arr[j] > 0 && arr[j+1] < 0){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

let arr=[4, 1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));