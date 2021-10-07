function solution(answers) {
  let answer1 = [1, 2, 3, 4, 5];
  let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let correct1 = [];
  let correct2 = [];
  let correct3 = [];
  let result = [];
  let score = [];

  for (let i = 0; i < answer1.length; i++) {
    for (let j = i; j < answers.length; j = j + 5) {
      answer1[i] === answers[j] ? correct1.push(j) : correct1;
    }
  }

  for (let i = 0; i < answer2.length; i++) {
    for (let j = i; j < answers.length; j = j + 8) {
      answer2[i] === answers[j] ? correct2.push(i) : correct2;
    }
  }

  for (let i = 0; i < answer3.length; i++) {
    for (let j = i; j < answers.length; j = j + 10) {
      answer3[i] === answers[j] ? correct3.push(i) : correct3;
    }
  }

  score = [correct1.length, correct2.length, correct3.length];
  let biggest = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) result.push(i + 1);
  }
  return result;
} // 모의고사

const answerTable = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const scoreList = [
    { student: 1, score: 0 },
    { student: 2, score: 0 },
    { student: 3, score: 0 },
  ];

  answers.forEach((el, i) => {
    answerTable.forEach((cu, l) => {
      if (cu[i % cu.length] === el) {
        scoreList[l].score += 1;
      }
    });
  });

  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );
  const result = scoreList.filter((num) => {
    return biggest === num.score;
  });
  return result.map((el) => el.student);
} // 모의고사 mento-method
