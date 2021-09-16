function solution(arr){
  const len = arr.length;
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len - 1 - i; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));