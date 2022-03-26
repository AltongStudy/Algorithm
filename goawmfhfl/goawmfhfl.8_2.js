// ✅ 8-2 이진트리순회

function solution(n){
    let answer="";
    function DFS(v){
        if(v>7) return;
        else{
            // answer+=(v+' '); // 전위 순회 출력
            DFS(v*2);
            // answer+=(v+' '); // 중위 순회 출력
            DFS(v*2+1);
            // answer+=(v+' '); // 후위 순회 출력
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));