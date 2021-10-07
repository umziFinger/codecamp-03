import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((asasasasa) => {
      // 아무 로직
      return asasasasa + 1;
    });
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>카운트증가</button>
    </>
  );
}


// 정규식 
/\w@\w+\.com/.test("asdfasefa@aaa.com")
//  \w : 모든문자

/\d{3}-\d{3,4}-\d{4}/.test("010-4165-7895")
//  \d:모든 숫자 {}:자리수

/\d{4}\.\d{2}\.\d{2}/.test("2021.05.05")
// 날짜