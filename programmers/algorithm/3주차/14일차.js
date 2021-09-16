function solution(numbers) {
  let arr = [];
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }

  answer = [...new Set(arr)].sort((a, b) => a - b); //new Set(): 괄호안에있는 배열을 중복제거하기   //[...~] : 배열로 만들기

  return answer;

  // return answer = arr.sort((a,b)=>a-b)
  //                    .filter((el,i) => arr[i] !== arr[i+1]) // filter를 사용한 중복제거
} // 두 개 뽑아서 더하기
