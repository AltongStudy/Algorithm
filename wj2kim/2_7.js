/**
 * 문제 
 * 
 * 봉우리
 */

/**
 * 접근 방법
 * 
 * 2중 포문으로 각각의 상하좌우와 비교하여 가장 크면 answer 배열에 추가한다.
 * arr.length 를 return 한다.
 */

function solution(arr) {
    let answer = 0;
    let n = arr.length;

    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for( let i = 0; i < n; j++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k ++) {
                let nx = i + dx[k]; // 행
                let ny = j + dy[k]; // 열
                if (nx >=0 && nx < n && ny >=0 && ny < n && arr[nx][ny] >= arr[i][j]) {
                    flag = 0;
                    break;
                }
            }
            if (flag) {
                answer ++;
            }
        }
    }
    return answer;
}

const arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
]

solution(arr);