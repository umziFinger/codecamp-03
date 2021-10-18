import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../commons/layout/header/LayoutHeader.queries";
import ProductDetailUI from "./productDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from "./productDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDetail() {
  const router = useRouter();

  const [isPicked, setIsPicked] = useState();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  const { data: userdata } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: pickeddata } = useQuery(FETCH_USED_ITEMS_I_PICKED);

  console.log("aaa", pickeddata);

  console.log(data?.fetchUseditem.images[0]);
  function onClickDelete() {
    deleteUseditem({
      variables: {
        useditemId: router.query.useditemId,
      },
    });
    alert("상품삭제 완료");
    router.push(`/market/list`);
  }

  function onClickUpdate() {
    router.push(`/market/detail/${router.query.useditemId}/edit`);
  }

  function onClickMoveToList() {
    router.push(`/market/list`);
  }

  async function onClickBuy() {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.useditemId,
      },
    });
    console.log(result);
  }

  const lat = data?.fetchUseditem.useditemAddress?.lat;
  const lng = data?.fetchUseditem.useditemAddress?.lng;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3b50eb6bcb79315da55039f6461203ef";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(lng, lat), // 지도의 중심좌표.
          draggable: false,
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {}
        );
      });
    };
  });

  async function onClickPick() {
    const result = await toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    console.log(result);
  }

  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickMoveToList={onClickMoveToList}
      onClickBuy={onClickBuy}
      userdata={userdata}
      onClickPick={onClickPick}
    />
  );
}
