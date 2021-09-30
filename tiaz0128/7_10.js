function solution(target, arr) {
  arr.sort((a, b) => a - b)

  // mid , lt, rt
  let result = -1
  let mid = 0;
  let lt = 0;
  let rt = arr.length - 1;

  while(lt <= rt){
    mid = parseInt((lt + rt) / 2)

    if(arr[mid] === target) { result = mid; break; }
    if(arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return result;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));