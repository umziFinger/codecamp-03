import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductListUI from "./productList.presenter";
import { FETCH_USED_ITEMS } from "./productList.queries";

export default function ProductList() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  const router = useRouter();
  const [todayView, setTodayView] = useState([]);

  const onClickMoveToDetail = (el) => () => {
    // router.push(`/market/detail/${el._id}`);
    const clickDate = new Date().toISOString().slice(0, 10);
    const todayView = JSON.parse(localStorage.getItem(clickDate)) || [];

    todayView.push(el);
    console.log(el);

    localStorage.setItem(clickDate, JSON.stringify(todayView));
    setTodayView(todayView);
  };

  console.log(todayView);
  return (
    <ProductListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      todayView={todayView}
    />
  );
}
