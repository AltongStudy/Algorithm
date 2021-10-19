function reverseNum(num) {
  let covertNum = 0;

  while (num) {
      let t = num % 10;
      covertNum = covertNum * 10 + t;
      num = parseInt(num / 10);
  }
  return covertNum;
}

function isPrime(num){
  if(num === 1) return false

  for(i = 2; i <= parseInt(Math.sqrt(num)); i++){
      if(num % i === 0) return false
  }
  return true
}

function solution(arr){
  const answer = []

  arr.forEach((num) => { 
      let covertNum = reverseNum(num);
      if(isPrime(covertNum)) answer.push(covertNum)
  })
  
  return answer;
}

console.log(solution([32,55,62,20,250,370,200,30,100]))
