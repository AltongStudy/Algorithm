// 동전교환
function solution(arr,m){
    let answer = Number.MAX_SAFE_INTEGER;
    function DFS(L,sum){
        if(L>=answer) return;
        if(sum>m) return;
        if(sum === m){
            answer = Math.min(answer,L)
        }
        else{
            for(let i=0; i<arr.length; i++){
                DFS(L+1, sum+arr[i]);
            }
        }
    }
    DFS(0,0);
    return answer;
}

let arr = [1,2,5]
console.log(solution(arr,15)); 