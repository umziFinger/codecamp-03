function solution(n, m) {
  let answer = [];

  const gcdArr = [];

  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      gcdArr.push(i);
    }
  }
  answer[0] = Math.max(...gcdArr);
  for (let l = m; l <= n * m; l += m) {
    if (l % n === 0) {
      answer[1] = l;
      break;
    }
  }
  return answer;
} // 최대공약수, 최소공배수

function solution(n, m) {
  // 유클리드 호제법

  // a를 b로 나눴을때 (a>b) === 큰수에서 작은수를 나눴을때
  // 나머지값이 0이 되면, 작은수가 최소공배수가 된다
  // 0이 되지않으면 작은 수가 큰수가 되고, 나머지값이 작은수가 된다
  // 반복했을 때에 0이 나오면, 작은수가 최소공배수가 된다

  let a = m;
  let b = n;
  let r = 0;

  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return [b, (n * m) / b];
} // 유클리드 호제법
