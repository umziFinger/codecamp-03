import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import LayoutSidebarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const [isMarket, setIsMarket] = useState(false);

  const router = useRouter();

  function onClickList() {
    router.push("/boards/list");
  }

  function onClickWrite() {
    router.push("/boards/new");
  }

  function onClickMarket() {
    setIsMarket((prev) => !prev);
  }

  function onClickCreateProduct() {
    router.push(`/market/new`);
    setIsMarket((prev) => !prev);
  }

  return (
    <LayoutSidebarUI
      onClickList={onClickList}
      onClickWrite={onClickWrite}
      onClickMarket={onClickMarket}
      onClickCreateProduct={onClickCreateProduct}
      isMarket={isMarket}
    />
  );
}
