import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  Login,
  Logo,
  Logout,
  ProfileImg,
  ProfileName,
  RightTop,
  StickyWrapper,
  Wrapper,
} from "./LayoutHeader.styled";

export default function LayoutHeaderUI(props) {
  const { accessToken, userInfo } = useContext(GlobalContext);
  console.log("asdfasdfa:", userInfo.name);
  return (
    <StickyWrapper>
      <Wrapper>
        <Logo onClick={props.onClickLogo}>LOGO</Logo>
        <RightTop>
          {accessToken ? (
            <>
              <ProfileImg src="/images/profile.png" />
              <ProfileName>{userInfo.name}님</ProfileName>
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
