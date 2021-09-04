// 💪🏻 문제 도전 💪🏻

{
    function solution(scr){
        let answer = [], count;
        
        for (let i=0; i<scr.length; i++){
        count = 1;
        for(let j=0; j<scr.length; j++){
        if(scr[i]<scr[j]) count++
        }
        answer.push(count)
        }
        
        return answer;
    }
    
    
    let score = [87,89,92,100,76]
    console.log(solution(score))
}

// 🦾 다른 방식 문제 풀이 🦾

{
    function solution(arr) {
    const answer = [];
    const copy = arr.slice();

    arr.sort((a, b) => b - a);

    for (let i = 0; i < arr.length; i++) {
    answer.push(arr.indexOf(copy[i]) + 1);
    }
    return answer;
    }
    let score = [87,89,92,100,76]
    console.log(solution(score))
}