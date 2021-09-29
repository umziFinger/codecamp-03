function solution(a, b) {
  let answer = "";
  let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dow = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let count = [];

  //   count = days.slice(0,a-1).reduce((a,b)=>a+b,0)

  new Date(2016, a - 1, b).getDay(); // 일요일로 부터 몇번째 날인지 출력

  //   days.map((el, i) =>
  //     i < a - 1 ? (count = Number(count) + Number(el)) : count
  //   );

  for (let i = 0; i < 7; i++) {
    (count + b - 1) % 7 === i ? (answer = dow[i]) : answer;
  }
  return answer;
} // 2016년
