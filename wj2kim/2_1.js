/**
 * 문제 
 * 
 * N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성학세요.(첫 번째 수는 무조건 출력한다)
 */

/**
 * 접근 방법
 * 
 * 1. 반복문을 통해 자연수 N을 N개의 정수와 하나씩 비교하여 큰 수를 새로운 배열에 push
 * 2. 문제에 입력예제에 있는 숫자 자연수 6의 의미가 이해가 안됬었는데 강의에서 해당 자연수는 무시하고 arr만 넘기라고 해서 정리가 되었다.
 */

function solution(arr) {   
    let answer = [];
    answer.push(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

const arr = [7, 3, 9, 5, 6, 12];

console.log(solution(arr))



