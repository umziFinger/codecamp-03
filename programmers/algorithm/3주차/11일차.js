function solution(s) {
  // p 와 y의 개수를 저장하는 객체
  const check = {
    p: 0,
    y: 0,
  };

  // 모든 글자를 소문자로 변환
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "y") {
      // check[s[i]] = check[s[i]] + 1;
      check[s[i]] += 1;
    }
  }

  return check.p === check.y;
} //문자열 p와y의 개수

function solution(s) {
  const answer = s.split(" ").map((str) => {
    return str.split("").map();
  });
}
