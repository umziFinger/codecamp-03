import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import ProductListUI from "./productList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./productList.queries";

export default function ProductList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const router = useRouter();
  const [todayView, setTodayView] = useState([]);
  const clickDate = new Date().toISOString().slice(0, 10);

  const { data: bestdata } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  useEffect(() => {
    setTodayView(JSON.parse(localStorage.getItem(clickDate) || "{}"));
  }, []);

  const onClickMoveToDetail = (el: any) => () => {
    router.push(`/market/detail/${el._id}`);

    const todayView = JSON.parse(localStorage.getItem(clickDate) || "[]") || [];

    todayView.push(el);
    console.log(el);

    localStorage.setItem(clickDate, JSON.stringify(todayView));
    setTodayView(todayView);
  };

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  function onClickMoveToTodayView(event: any) {
    router.push(`/market/detail/${event.currentTarget.id}`);
  }

  function onClickBestUseditem(event: any) {
    router.push(`/market/detail/${event.currentTarget.id}`);
  }

  return (
    <ProductListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      todayView={todayView}
      onLoadMore={onLoadMore}
      onClickMoveToTodayView={onClickMoveToTodayView}
      bestdata={bestdata}
      onClickBestUseditem={onClickBestUseditem}
    />
  );
}
