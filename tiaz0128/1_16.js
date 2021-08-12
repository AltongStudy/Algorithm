function solution(str){
    let buffer = ''

    for(ch of str){
        if(buffer.indexOf(ch) === -1){
            buffer += ch
        }
    }

    return buffer 
}

console.log(solution("ksekkset"))