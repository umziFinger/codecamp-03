function solution(n) {
  let reverse = n.toString(3).split("").reverse().join("");

  return parseInt(reverse, 3);
} // 3진수 뒤집기
