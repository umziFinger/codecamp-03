import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MyUseditemUI from "./myUseditem.presenter";
import {
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USER_LOGGED_IN,
} from "./myUseditem.queries";

export default function MyUseditem() {
  const router = useRouter();
  const [isMyUseditem, setIsMyUseditem] = useState(true);
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const { data: pickeddata } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });
  const { data: userdata } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickMyItem(event) {
    router.push(`/market/detail/${event.currentTarget.id}`);
  }

  function onClickMyUseditem() {
    setIsMyUseditem(true);
  }

  function onClickMyPick() {
    setIsMyUseditem(false);
  }

  function onClickMoveToPointDetail() {
    router.push(`/mypage/mypoint`);
  }

  return (
    <MyUseditemUI
      data={data}
      onClickMyItem={onClickMyItem}
      onClickMyUseditem={onClickMyUseditem}
      isMyUseditem={isMyUseditem}
      onClickMyPick={onClickMyPick}
      pickeddata={pickeddata}
      userdata={userdata}
      onClickMoveToPointDetail={onClickMoveToPointDetail}
    />
  );
}
