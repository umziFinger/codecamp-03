function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
} //마라톤 완주 - for

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
} //마라톤 완주 - filter

function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  let stop = false;

  participant.forEach((name, i) => {
    if (name !== completion[i] && stop === false) {
      answer = name;
      stop = true;
    }
  });

  return answer;
} //마라톤 완주 - forEach
