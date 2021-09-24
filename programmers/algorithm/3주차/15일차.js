function solution(n) {
  let num = 1;

  while (num * num < n) {
    num++;
  }

  return num * num === n ? (num + 1) ** 2 : -1;
} // 정수 제곱근 판별 - mento

function solution(n) {
  var answer;
  for (let i = 0; i * i <= n; i++) {
    if (n === 1) {
      answer = 4;
    }
    if (n / i === i) {
      answer = (i + 1) ** 2;
      break;
    }
  }
  return answer ? answer : -1;
} // 정수 제곱근 판별

function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    // 정수면 트루 실수면 펄스
    return (sqrt + 1) ** 2;
  } else {
    return -1;
  }
} // 정수 제곱근 판별 method활용

function solution(arr) {
  var answer = [];

  let smallest = arr[0];

  arr.map((el) => (el < smallest ? (smallest = el) : smallest));

  let newArr = arr.filter((el) => el !== smallest);

  newArr.length ? (answer = newArr) : answer.push(-1);

  return answer;
} //제일 작은수 제거하기
