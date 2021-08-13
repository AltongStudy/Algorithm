function solution(str){
    const mid = Math.floor(str.length / 2)
    return str.length % 2 === 0 ? str.substr(mid-1, 2) : str.substr(mid, 1)
}

console.log(solution("study"))
console.log(solution("good"))