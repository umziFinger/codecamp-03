function solution(board, moves) {
  let answer = [];
  let slice = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (answer[answer.length - 1] === board[j][moves[i] - 1]) {
          answer.splice(answer.length - 1, 1);
          slice.push(board[j].splice([moves[i] - 1], 1, 0));
          break;
        }
        answer.push(board[j][moves[i] - 1]);
        board[j].splice([moves[i] - 1], 1, 0);

        break;
      }
    }
  }
  return slice.length * 2;
} // 크레인 인형뽑기
