const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  const answer = s.split("").map((str) => {
    if (str === " ") {
      return " ";
    }
    const text = lower.includes(str) === true ? lower : upper;
    let index = text.indexOf(str) + n;
    if (text[index] === undefined) {
      index = index - 26;
    }
    return text[index];
  });
  return answer.join("");
} // 시저암호
