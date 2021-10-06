// ✅ 8-1 이진수 출력(재귀)

function solution(n){
    let answer="";
    function DFS(n){
        if(n===0) return;
        else{
            DFS(parseInt(n/2))
            answer+=String(n%2)
        }
    }
    DFS(n);
    return answer;
}