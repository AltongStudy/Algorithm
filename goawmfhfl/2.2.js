// 🌟 강의를 보고 풀어본 정답 🌟

{
    function solution(s) {
        let answer = 0;
        let max = Number.MIN_SAFE_INTEGER;
    
        for (i of s) {
            if (i > max) {
                max = i;
                answer++;
            }
        }
    
        return answer;
    }
    
    const arr = [130, 135, 148, 140, 145, 150, 150, 153];
    console.log(solution(arr));
}