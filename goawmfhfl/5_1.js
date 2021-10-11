/**
 * 🔖 최대매출 🔖
 * 
 *  🧑🏻‍💻  나의 문제 풀이  🧑🏻‍💻
 * 1. 투포인터 알고리즘을 활용해서 문제풀이를 진행했다.
 * 2. 오른쪽의 포인터를 활용해서 sum에 4개의 값이 담길 경우 if 조건문 발생
 * 3. 조건문에 의해서 왼쪽 포인터의 값을 빼준다.
 * 4. 이후 k의 값을 ++ 해줌으로써 오른쪽 포인터가 이동할 때 왼쪽 포인터도 함께 이동할 수 있도록 지정
 * 5. for문을 거칠 때마다 answer에는 Math.max 메서드를 활용하여 최대값 비교해서 할당.
 */

 function solution(arr, k) {
    let answer = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let lt = 0;

    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt]
        if(rt === k){
            sum-=[arr[lt++]]
            k++
        }
        answer = Math.max(sum,answer)
    }

    return answer;
}

let days = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
console.log(solution(days,3));

// 👨🏻‍🏫 강사님의 문제 풀이 👨🏻‍🏫
/**
 * 1. for문을 통해서 첫 번째 sum의 총합을 구했음
 * 2. 두번째 for문에서는 초기식은 k번째부터 시작함.
 * 3. 슬라이딩 윈도우 방식에서 새로 추가하는 요소를 arr[i]식으로 표현,
 * 4. 삭제되는 요소를 arr[i-k]로 표현
 * 5. 0번째 인덱스는 삭제 3번째 인덱스는 추가되는 식으로 구성.
 * 6. 시작하는 포인트를 i-k를 통해서 정해줬음.
 * 7. 그런다음 Math.max를 통해서 값을 바로 구함.
 */

 function solution(arr,k){
    let answer = 0;
    let sum = 0;
    // 최대값 구하기
    for(let i=0; i<k; i++) sum += arr[i]
    answer = sum;
    for(let i=k; i<arr.length; i++){
    sum+=(arr[i]-arr[i-k])
    answer = Math.max(answer,sum)
    }
    return answer;
    }
    let days = [12,15,11,20,25,10,20,19,13,15]
    console.log(solution(days,3));