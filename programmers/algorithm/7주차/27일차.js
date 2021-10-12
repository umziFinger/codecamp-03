function solution(n) {
  let answer = 0;

  // 2부터 n 까지의 숫자들을 담아주는 배열
  const numbers = [];
  for (let i = 2; i <= n; i++) {
    // numbers.push(i);
    numbers[i - 2] = i;
  }

  for (let i = 2; i * i <= n; i++) {
    for (let l = i * i; l <= n; l += i) {
      numbers[l - 2] = false;
    }
  }

  // 배열에서 false 값 (= 소수가 아닌 값)을 제거한다.
  answer = numbers.filter((data) => data !== false);

  return answer.length;
} // 소수찾기
