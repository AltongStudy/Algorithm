function solution(str){
    return str.split(/[A-Z]/g).length - 1
}

console.log(solution("KoreaTimeGood"))