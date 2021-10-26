import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken, setAccessToken }: any = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  console.log(data);

  function onClickLogin() {
    router.push(`/login`);
  }

  function onClickSignUp() {
    router.push(`/signup`);
  }

  function onClickLogo() {
    router.push(`/main`);
  }

  function onClickLogout() {
    localStorage.removeItem("isLogedIn");
    setAccessToken("");
    alert("로그아웃");
  }

  const onClickProfileImage = () => {
    router.push(`/mypage/myuseditem`);
  };

  const onClickPoint = () => {
    router.push(`/mypage/mypoint`);
  };

  // useEffect(() => {

  // }, [accessToken]);

  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      onClickLogo={onClickLogo}
      onClickLogout={onClickLogout}
      onClickProfileImage={onClickProfileImage}
      onClickPoint={onClickPoint}
      data={data}
    />
  );
}
