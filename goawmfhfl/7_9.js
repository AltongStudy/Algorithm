// 7-9 결혼식
// // 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER
    let T_LINE = []

    for(let x of times){
        T_LINE.push([x[0],'s'])
        T_LINE.push([x[1],'e'])
    }

    T_LINE.sort((a,b)=>{
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt()
        else return a[0]-b[0]
    })

    let cnt = 0;

    for(let x of T_LINE){
        if(x[1] === 's') cnt++
        else cnt--
        answer = Math.max(answer,cnt)
    }

    return answer;
}