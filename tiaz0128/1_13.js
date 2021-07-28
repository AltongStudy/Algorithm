function solution(str) {
    let  ret = ""
    for(ch of str){
        if(ch === ch.toUpperCase()){
            ret += ch.toLowerCase()
        } else {
            ret += ch.toUpperCase()
        }
    }

    return ret
}

console.log(solution("StuDY"))