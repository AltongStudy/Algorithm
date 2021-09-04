function solution(arr){
  return arr.map((item, idx, ori) => {
       let score = 1;

       ori.forEach((oNum) => {
           if(oNum > item) score++
       })
       return score
   })
}

console.log(solution([87,89,92,100,76]))