import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickLogin() {
    router.push(`/login`);
  }

  function onClickSignUp() {
    router.push(`/signup`);
  }

  function onClickLogo() {
    router.push(`/boards/main`);
  }

  function onClickLogout() {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    alert("로그아웃");
  }

  // useEffect(() => {

  // }, [accessToken]);

  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      onClickLogo={onClickLogo}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
