function solution(arr){
  const len = arr.length;

  for(let i = 0; i < len; i++){
    let tmp = arr[i], j
    for(j = i - 1; j >= 0; j--){
      if(arr[j] > tmp) arr[j+1] = arr[j]
      else break;
    }
    arr[j+1] = tmp
  }
  
  return arr
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));