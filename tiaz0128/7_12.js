function count(arr, mid){
  let cnt = 1;
  let endPosition = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] - endPosition >= mid){
      cnt++;
      endPosition = arr[i];
    }
  }
  
  return cnt;
}

function solution(c, arr){
  let result = 0;
  arr.sort((a, b) => a - b)

  let lt = 1;
  let rt = arr[arr.length - 1];

  while(lt <= rt){
    let mid = parseInt((lt + rt) / 2)
    if(count(arr, mid) >= c){
      result = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return result;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));