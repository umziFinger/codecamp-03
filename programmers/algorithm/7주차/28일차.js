function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = [];
  for (let i = 1; i <= N; i++) {
    clearArr.push({
      stage: i,
      clear: 0,
      fail: 0,
    });
  }
  let users = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (clearArr[stages[i] - 1]) {
      clearArr[stages[i] - 1].clear += 1;

      if (stages[i] !== stages[i + 1]) {
        const fail = clearArr[stages[i] - 1].clear / users;
        users = users - clearArr[stages[i] - 1].clear;

        clearArr[stages[i] - 1].fail = fail;
      }
    }
  }
  const answer = clearArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);

  return answer;
} // 실패율

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const clearArr = new Array(N).fill(1).map((el, i) => {
    const stage = el + i;
    const result = { stage: stage, clear: 0, fail: 0 };

    for (let l = 0; l < stages.length; l++) {
      if (stages[l] === stage) {
        result.clear += 1;
        if (stages[l + 1] !== stage) {
          result.fail = result.clear / stages.length;
          stages.splice(0, result.clear);
          break;
        }
      }
    }
    return result;
  });
  const answer = clearArr
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  return answer;
} // 실패율 - method
