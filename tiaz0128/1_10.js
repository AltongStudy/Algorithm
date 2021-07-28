function solution(str,  ch){
    // return str.split('').reduce((prev, next) => 
    //     { return next === ch ? prev + 1 : prev }
    // , 0)

    return str.split(ch).length - 1
}

console.log(solution("COMPUTERPROGRAMMING", "R"))