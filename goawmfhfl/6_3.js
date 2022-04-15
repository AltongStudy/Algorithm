// 📝 6-3 크레인 인형 뽑기 ( 스택 )

let a = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]

let b = [2,2,1,4,5,4,3,5]
console.log(solution(a,b));
// 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫
function solution(board, moves){
    let answer = 0;
    let stack = [];

    moves.forEach(pos=>{
        for(let i=0; i<board.length; i++){
            if(board[i][pos-1]!==0){
                let tmp = board[i][pos-1]
                board[i][pos-1]=0
                if(tmp === stack[stack.length-1]){
                    stack.pop()
                    answer+=2
                }
                else stack.push(tmp)
                break
            }
        }
    })
    return answer;
}



// 🧑🏻‍💻 다른 문제 풀이 🧑🏻‍💻

function solution(board, moves) {
    const basket = [];
    let result = 0;
    moves.forEach(order => {
        const doll = pickup(board, order-1);
        if(doll){
            if(basket[basket.length-1] === doll){
                basket.pop();
                result +=2;
            }else{
                basket.push(doll);
            }
        }
    });
    return result;
}

function pickup(board, order){
    for(let i = 0; i < board.length ; i++){
        if(board[i][order] !== 0){
            const doll = board[i][order];
            board[i][order]= 0;
            return doll;
        }
    }
}