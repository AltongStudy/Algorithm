// ✅ 7-3 Special Sort

// 🌟 문제 풀이 🌟

function solution(arr) {
    let plus = []
    let minus = []

    for(let x of arr){
        if(x>0) plus.push(x)
        else minus.push(x)
    }

    return [...minus,...plus]
  }
  
  let arr = [1,2,3,-3,-2,5,6,-6];
  console.log(solution(arr));

// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(arr) {

    let answer = arr
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++)
        if(arr[j]>0 && arr[j+1]<0) [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    return answer
    }


let arr = [1, 2, 3, -3, -2, 5, 6, -6]
console.log(solution(arr));