const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  const stack = [];
  for (let move of moves) {
    let index = 0;
    while (index < board.length) {
      const doll = board[index][move - 1];
      if (doll) {
        stack.push(doll);
        board[index][move - 1] = 0;
        break;
      }
      index++;
    }
    if (stack.length >= 2 && stack[stack.length - 1] == stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  }
  return answer;
}

console.log(solution(board, moves));
