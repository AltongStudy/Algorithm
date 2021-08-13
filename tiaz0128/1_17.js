function solution(str){
    const arr = []

    str.forEach((s) => {
        if(arr.indexOf(s) === -1) arr.push(s)
    })

    return arr
}

console.log(solution(
    [
     "good"
    , "time"
    , "good"
    , "time"
    , "student"
    ]
))