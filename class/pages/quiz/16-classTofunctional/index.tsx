import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
// import { Component, createRef } from "react";

export default function ClassToFunctionalPage() {
  //   state = {
  //     count: 0,
  //   };

  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
    inputRef.current.focus();
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  });

  //   componentDidMount() {
  //     console.log("컴포넌트가 마운트됐습니다~");
  //     this.inputRef.current?.focus();
  //   }

  //   componentDidUpdate() {
  //     console.log("컴포넌트가 변경됐습니다~");
  //   }

  //   componentWillUnmount() {
  //     alert("컴포넌트가 제거됩니다~");
  //   }

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  // onClickButton = () => {
  //     this.setState((prev: { count: number }) => ({ count: prev.count + 1 }));
  //   };

  // onClickMove = () => {
  // 	Router.push("/")
  // }

  console.log("마운트 시작");
  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
