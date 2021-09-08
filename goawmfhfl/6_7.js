// 📝 6-7 교육과정설계(큐)

const subjects = 'CBA'
const plan = 'CBDAGE'
console.log(solution(subjects,plan));

// 🌟 문제 풀이 🌟
function solution(subjects,plan){
    let answer = "YES"
    let queue = new Array(...subjects)

    for(let x of plan){
        if(queue.includes(x) && queue[0] === x) queue.shift()
    }
    
    if(queue.length>0) return "NO"
    return answer;
}

// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(subjects,plan){
    let answer = "YES"
    let queue = subjects.split('')
    for(let x of plan){
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO"
        }
    }
    if(queue.length>0) return "NO"
    return answer
}