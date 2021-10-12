import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const [todayLook, setTodayLook] = useState([]);

  const today = new Date().toISOString().slice(0, 10);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    let isExists = false;

    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }

    baskets.push(el);

    console.log("담기:", el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  function onClickLogin() {
    alert("로그인성공");
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    if (baskets.length) {
      const result = confirm("장바구니 이동 ㄱ?");
      if (result) router.push(`27-03-basket-logged-in`);
    }
  }

  function onClickDate(event) {
    const clickDate = new Date().toISOString().slice(0, 10);
    const date = JSON.parse(localStorage.getItem(clickDate)) || [];

    // let isExists = false;

    // date.forEach((el) => {
    //   if (el._id === basketEl._id) isExists = true;
    // });
    // if (isExists) {
    //   alert("이미 장바구니에 담으셨습니다.");
    //   return;
    // }

    date.push(event.currentTarget?.id);
    localStorage.setItem(clickDate, JSON.stringify(date));
    setTodayLook(JSON.parse(localStorage.getItem(clickDate)));
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id} id={el.title} onClick={onClickDate}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
      <br />
      <br />
      <br />
      오늘 본 상품
      <div>
        {todayLook.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </>
  );
}
