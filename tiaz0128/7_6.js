function solution(arr){
  const result = [];
  const sortArr = [...arr]
  sortArr.sort((a, b) => a - b)

  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== sortArr[i]) result.push(i + 1)
  }

  return result;
}

//3 8
let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

//3 5
let arr2=[120, 130, 150, 150, 130, 150];
console.log(solution(arr2));

//3 4
let arr3=[120, 130, 150, 130, 150, 150];
console.log(solution(arr3));