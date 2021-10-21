let Alph = "";
let special = ["-", "_", "."];

for (let i = 97; i <= 122; i++) {
  Alph += String.fromCharCode(i);
}

function solution(new_id) {
  let step1 = new_id.toLowerCase().split("");
  let step2 = step1.filter(
    (el) => Alph.includes(el) || !isNaN(Number(el)) || special.includes(el)
  );
  let step3 = step2.filter((el, i) => el !== "." || step2[i - 1] !== ".");
  let step4 =
    step3[0] === "."
      ? step3.shift()
      : step3[step3.length - 1] === "."
      ? step3.pop()
      : step3;
  let step5 = step3.length === 0 ? step3.push("a") : step3;
  let step6 = step3.length >= 16 ? step3.slice(0, 15) : step3;
  let step6sub = step6[step6.length - 1] === "." ? step6.pop() : step6;
  let step7 =
    step6.length <= 2
      ? step6.length === 1
        ? step6.push(step6[step6.length - 1], step6[step6.length - 1])
        : step6.push(step6[step6.length - 1])
      : step6;
  let LastStep = step6.join("");
  return LastStep;
} // 아이디추천
