const operators = {
  "+": (num1, num2) => Number(num1) + Number(num2),
  "-": (num1, num2) => Number(num1) - Number(num2),
  "*": (num1, num2) => Number(num1) * Number(num2),
  "/": (num1, num2) => Math.floor(num1 / num2),
};

function solution(str){
  const buffer = [];
  str.split('').forEach(ch => {
    if(ch.match(/[0-9]/g)){
      buffer.push(ch)
    } else {
      const a = buffer.pop()
      const b = buffer.pop()
      
      buffer.push(operators[ch](b, a))
    }
  })

  return buffer[0]
}

let str="352+*9-";
console.log(solution(str));