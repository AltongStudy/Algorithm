/**
 * 문제 
 * 
 * 격자판 최대합
 * 
 */

/**
 * 접근 방법
 * 
 * 이중 for문을 통해 행을 더한 값, 열을 더한 값을 구하자 
 * 대각선을 sum을 구하는건 음... 
 * 
 */

function solution(arr) {
    let answer = 0;
    let length = arr.length;

    let sum1 = 0; // 행 sum
    let sum2 = 0; // 열 sum

    for (let i = 0; i < length; i++) {
        sum1 = 0;
        sum2 = 0;
        for (let j = 0; j < length; j ++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        sum1 = 0;
        sum2 = 0;

        answer = Math.max(answer, sum1, sum2);
    }

    for (let i = 0; i < length; i ++) {
        sum1 += arr[i][i];
        sum2 += arr[i][length - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);

    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];


solution(arr);

/**
 * 아쉬운 점 
 * 
 * 강의를 통해 대각선을 구하는 방법을 알아냈다.
 * 1. arr[i[i]
 * 2. arr[i][length - i - 1];
 */