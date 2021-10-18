// 7-8 회의실배정
// // 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(arr){
    let answer = 0;
    let et = 0;

    arr.sort((a,b)=>{
        if(a[1]===b[1]) return a[0]-b[0]
        else return a[1]-b[1]
    })

    for(let x of arr){
        if(x[0]>=et){
            answer++
            et = x[1]
        }
    }
    return answer;
}

const arr = [[3,3],[1,3],[2,3]]
console.log(solution(arr));