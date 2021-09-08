function solution(a, b){
  const buffer = [];
  let cnt = 0;

  b.forEach(index => {
    index -= 1;

    for(let i = 0; i < a.length; i++){

      if(a[i][index] !== 0) {
         if(buffer[buffer.length - 1] === a[i][index]){
          buffer.pop()
          cnt+=2;
        } else {
          buffer.push(a[i][index])
        }

        a[i][index] = 0;
        break;
      }
    }
  })

  return cnt;
}


let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));