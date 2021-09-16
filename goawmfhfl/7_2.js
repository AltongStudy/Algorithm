// ✅ 7-2 버블정렬
// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫
function solution(arr) {

    let answer = arr
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]) [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
    return answer
}

let arr = [13, 5, 11, 7, 23, 15]
console.log(solution(arr));