// 🌟 강의를 보고 풀어본 정답 🌟

{
    function solution(s){
        let answer =[];
        answer.push(s[0])
        for(let i=1; i<s.length; i++){
        if(s[i-1]<s[i]) answer.push(s[i])
        }
        return answer
    }
}

// 🌟 reduce() 메서드를 활용한 정답 🌟
{
    function solution(arr) {
        let answer = [];
        arr.reduce((prev, next) => {
            // console.log(`prev: ${prev} next: ${next}`);
        prev < next ? answer.push(next) : next
        return next;
        }, 0);
        return answer;
    }

    let arr = [7, 3, 9, 5, 6, 12];
    console.log(solution(arr));
}