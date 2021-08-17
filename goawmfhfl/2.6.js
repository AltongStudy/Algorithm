// 💪🏻 문제 도전 💪🏻
{
    function solution(arr){
        let answer = Number.MIN_SAFE_INTEGER;
        let n = arr.length;
        let rowSum = 0; // 행
        let columnSum = 0; // 열
        let slash = 0 // 대각선
        let backSlash = 0 // 역 대각선

        for(let i=0; i<n; i++){
            rowSum = 0;
            columnSum = 0;
            for(let j=0; j<n; j++){
                rowSum += arr[i][j] // 행
                columnSum += arr[j][i] // 열
            }
            answer = Math.max(answer,columnSum,rowSum) // 행 열의 최대합
            console.log(`
            answer: ${answer}
            columnSum: ${columnSum}
            rowSum: ${rowSum}
            `);
        }
        for(let i=0; i<n; i++){
            slash += arr[i][i] // 대각선
            backSlash += arr[i][n-i-1] //역 대각선
        }
        answer = Math.max(answer, slash, backSlash)
        console.log(`
        answer: ${answer}
        slash: ${slash}
        backSlash: ${backSlash}
        `);


        return answer;
    }
    let board =[
        [10, 13, 10, 12, 15],
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19],
    ]
    console.log(solution(board));
}

// 🦾 다른 방식 문제 풀이 🦾

{    
    function solution(arr) {
        let row = new Array(arr.length).fill(0); 
        console.log(`row: ${row}`);
        let column = new Array(arr.length).fill(0); 
        console.log(`column: ${column}`);
        let cross = 0;
        let reverseCross = 0;
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i === j) {
                cross += arr[i][j];
                reverseCross += arr[i][arr.length - i - 1];
                }
                row[i] += arr[i][j];
                column[i] += arr[j][i];
                }
            }
        console.log(`row: ${[...row]}`);
        console.log(`column: ${[...column]}`);
        console.log(`cross: ${cross}`);
        console.log(`reverseCross: ${reverseCross}`);
            return Math.max(...row, ...column, cross, reverseCross);
        }
        let board =[
                [10, 13, 10, 12, 15],
                [12, 39, 30, 23, 11],
                [11, 25, 50, 53, 15],
                [19, 27, 29, 37, 27],
                [19, 13, 30, 13, 19],
            ]
            console.log(solution(board));
    
}
