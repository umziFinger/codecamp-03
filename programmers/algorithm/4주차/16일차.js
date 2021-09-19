function solution(x) {
  var answer = true;
  let length = String(x).split("").length;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum = sum + Number(String(x).split("")[i]);
  }

  if (x % sum === 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
} //하샤드 수
