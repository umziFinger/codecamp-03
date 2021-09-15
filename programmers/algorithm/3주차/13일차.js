function solution(num) {
  const arr = [num];
  let answer = 0;

  for (let i = 0; i <= 500; i++) {
    arr.push(arr[i] % 2 ? arr[i] * 3 + 1 : arr[i] / 2);

    if (arr[0] === 1) {
      answer = 0;
      break;
    }

    if (arr.length === 500) {
      answer = -1;
      break;
    }
    if (arr[arr.length - 1] === 1) {
      answer = arr.length - 1;
      break;
    }
  }
  return answer;
} // 콜라츠 추측

function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count >= 500) {
      return -1; // = break
    }
    count = count + 1;
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
  }
  return count;
} // 콜라츠 추측-mento
