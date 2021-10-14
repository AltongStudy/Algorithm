
// 바둑이승차
// 8_6
function solution(arr,c,n) {
    let answer = Number.MIN_SAFE_INTEGER;
    function DFS(L,sum) {
        if(sum>c) return;
        if(L===n){
            answer = Math.max(answer,sum)
        }else{
            DFS(L+1,sum+arr[L]);
            DFS(L+1,sum);
        }     
    }
    DFS(0,0)
    return answer;
}

let arr = [81,58,42,33,61]
let c = 259
let n = 5
console.log(solution(arr,c,n));

// - 바둑이를 태울 수 있는가 없는가? 의 경우의 수를 고려하여 문제를 풀어야 하는 문제
// - 부분 집합 문제로 접근해서 풀어야 하는 문제로 DFS함수에 (L,Sum)을 전달한다. 트리가 뻗어 나갈수록 강아지를 태운다 안태운다 순으로 뻗어나간다
// - 강아지의 길이 만큼 2n제곱 만큼 경우의 수를 구한다.
// - DFS를 풀 때 if else문을 활용하여 DFS의 무한 재귀에 stop 포인트를 정해줌
// - (L===n) n의 길이 값은 실제 구해야하는 강아지의 숫자보다 +1이다. 그 이유는 n번째의 길이에 도달했을 때 부분 집합이 구해지기 때문이다.
// - 2n 제곱 만큼의 경우의 수를 통해서 합해진 sum의 값을 answer에 할당된다.
// - 그 전에 트럭이 수용할 수 있는 무게보다 sum의 값이 크다면 바로 return을 해주어 최대값을 구하는 Math.max 메서드에 할당되지 않게 한다.
// - 결국 트럭이 수용할 수 있는 최대의 무게보다 많이 나갈 경우의 수는 모두 return되며 그 외의 상황은 문제의 요구사항 대로 트럭에 바둑이를 가장 많이 태울 수 있는 경우이므로 answer에 할당해준다.