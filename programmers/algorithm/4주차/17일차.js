function solution(a, b) {
  var answer = 1234567890;

  return a.map((el, i) => el * b[i]).reduce((a, b) => a + b);
} // 내적

function solution(arr) {
  var answer = [];

  let smallest = arr[0];

  arr.map((el) => (el < smallest ? (smallest = el) : smallest));

  let newArr = arr.filter((el) => el !== smallest);

  newArr.length ? (answer = newArr) : answer.push(-1);

  return answer;
} // 제일 작은수 제거하기 // indexOf(aaa): aaa의 인덱스값 // splice(시작인덱스, 잘라낼 개수)

function solution(arr) {
  // const min = Math.min.apply(null, arr) // Math.min이라는 메소드는 배열에 사용할수 가없어서 apply사용
  const min = Math.min(...arr); // 스프레드 연산자 사용해서 배열에 메소드 적용
  const result = arr.filter((num) => {
    return num > min;
  });

  return result.length === 0 ? [-1] : result;
} // 제일 작은 수 제거하기 - mento
