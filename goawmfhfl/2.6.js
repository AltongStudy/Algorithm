// πͺπ» λ¬Έμ  λμ  πͺπ»
{
    function solution(arr){
        let answer = Number.MIN_SAFE_INTEGER;
        let n = arr.length;
        let rowSum = 0; // ν
        let columnSum = 0; // μ΄
        let slash = 0 // λκ°μ 
        let backSlash = 0 // μ­ λκ°μ 

        for(let i=0; i<n; i++){
            rowSum = 0;
            columnSum = 0;
            for(let j=0; j<n; j++){
                rowSum += arr[i][j] // ν
                columnSum += arr[j][i] // μ΄
            }
            answer = Math.max(answer,columnSum,rowSum) // ν μ΄μ μ΅λν©
            console.log(`
            answer: ${answer}
            columnSum: ${columnSum}
            rowSum: ${rowSum}
            `);
        }
        for(let i=0; i<n; i++){
            slash += arr[i][i] // λκ°μ 
            backSlash += arr[i][n-i-1] //μ­ λκ°μ 
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

// π¦Ύ λ€λ₯Έ λ°©μ λ¬Έμ  νμ΄ π¦Ύ

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
