import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import LayoutSidebarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const [isMarket, setIsMarket] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  function onClickProductList() {
    router.push(`/market/list`);
    setIsMarket((prev) => !prev);
  }

  function onClickCharge() {
    setModalVisible((prev) => !prev);
  }

  function onClickMyPage() {
    router.push(`/mypage/myuseditem`);
  }

  return (
    <LayoutSidebarUI
      onClickList={onClickList}
      onClickWrite={onClickWrite}
      onClickMarket={onClickMarket}
      onClickCreateProduct={onClickCreateProduct}
      isMarket={isMarket}
      onClickProductList={onClickProductList}
      onClickCharge={onClickCharge}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onClickMyPage={onClickMyPage}
    />
  );
}
