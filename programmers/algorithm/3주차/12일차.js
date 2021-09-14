function solution(n) {
  var answer = [];

  answer = String(n)
    .split("")
    .reverse()
    .map((el) => Number(el));

  return answer;
} // 자연수 뒤집어 배열로 만들기

function solution(arr, divisor) {
  var answer = [];
  var arr1;

  arr1 = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
  arr1.length === 0 ? answer.push(-1) : (answer = arr1);
  return answer;
} // 나누어 떨어지는 숫자 배열
