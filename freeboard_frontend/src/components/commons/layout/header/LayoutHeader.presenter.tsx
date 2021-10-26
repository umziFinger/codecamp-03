import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  Login,
  Logo,
  Logout,
  Point,
  ProfileImg,
  ProfileName,
  RightTop,
  StickyWrapper,
  Wrapper,
} from "./LayoutHeader.styled";

export default function LayoutHeaderUI(props: any) {
  return (
    <StickyWrapper>
      <Wrapper>
        <Logo onClick={props.onClickLogo}>LOGO</Logo>
        <RightTop>
          {process.browser && localStorage.getItem("isLogedIn") ? (
            <>
              <ProfileImg
                src="/images/profile.png"
                onClick={props.onClickProfileImage}
              />
              <ProfileName>{props.data?.fetchUserLoggedIn.name}님</ProfileName>
              <Point onClick={props.onClickPoint}>
                {props.data?.fetchUserLoggedIn.userPoint.amount}포인트
              </Point>
              <Logout
                src="https://png.pngtree.com/png-vector/20190417/ourmid/pngtree-vector-logout-icon-png-image_947079.jpg"
                onClick={props.onClickLogout}
              />
            </>
          ) : (
            <>
              <Login onClick={props.onClickLogin}>로그인</Login>|
              <Login onClick={props.onClickSignUp}>회원가입</Login>
            </>
          )}
        </RightTop>
      </Wrapper>
    </StickyWrapper>
  );
}
