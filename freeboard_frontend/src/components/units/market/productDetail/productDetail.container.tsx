import { useMutation, useQuery } from "@apollo/client";
import { route } from "next/dist/server/router";
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

  const [isPicked, setIsPicked] = useState(true);

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

  const { data: pickeddata } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  useEffect(() => {
    for (let i = 0; i < pickeddata?.fetchUseditemsIPicked.length; i++) {
      if (
        pickeddata?.fetchUseditemsIPicked[i]._id === router.query.useditemId
      ) {
        setIsPicked(true);
        break;
      } else {
        setIsPicked(false);
      }
    }
  }, [pickeddata]);

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
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      alert("구매가 완료되었습니다");
      router.push(`/mypage/mypoint`);
    } catch (err) {
      alert(err);
    }
  }

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3b50eb6bcb79315da55039f6461203ef";
  //   document.head.appendChild(script);
  //   script.onload = () => {
  //     window.kakao.maps.load(function () {
  //       const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
  //       const options = {
  //         // 지도를 생성할 때 필요한 기본 옵션
  //         center: new window.kakao.maps.LatLng(Number(lng), Number(lat)), // 지도의 중심좌표.
  //         draggable: false,
  //         level: 3, // 지도의 레벨(확대, 축소 정도)
  //       };
  //       const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  //       console.log(map);

  //       const marker = new window.kakao.maps.Marker({
  //         // 지도 중심좌표에 마커를 생성합니다
  //         position: map.getCenter(),
  //       });
  //       // 지도에 마커를 표시합니다
  //       marker.setMap(map);

  //       // 지도에 클릭 이벤트를 등록합니다
  //       // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
  //       window.kakao.maps.event.addListener(
  //         map,
  //         "click",
  //         function (mouseEvent: { latLng: any }) {}
  //       );
  //     });
  //   };
  // });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f2400c45d63389ba72ae0f127645b6ec&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            Number(data?.fetchUseditem.useditemAddress?.lat) || 37.485148,
            Number(data?.fetchUseditem.useditemAddress?.lng) || 126.895113
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
          draggable: false,
        };

        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click"
          // function (mouseEvent: { latLng: any }) {
          //   // 클릭한 위도, 경도 정보를 가져옵니다

          //   const latlng = mouseEvent.latLng;

          //   // 마커 위치를 클릭한 위치로 옮깁니다
          //   marker.setPosition(latlng);

          //   // const message =
          //   //   "클릭한 위치의 위도는 " +
          //   //   latlng.getLat() +
          //   //   " 이고, " +
          //   //   "경도는 " +
          //   //   latlng.getLng() +
          //   //   " 입니다";
          //   // alert(message);
          // }
        );
      });
    };
  }, [data]);

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
    setIsPicked((prev) => !prev);
  }

  return (
    <ProductDetailUI
      data={data}
      pickeddata={pickeddata}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickMoveToList={onClickMoveToList}
      onClickBuy={onClickBuy}
      userdata={userdata}
      onClickPick={onClickPick}
      isPicked={isPicked}
    />
  );
}
