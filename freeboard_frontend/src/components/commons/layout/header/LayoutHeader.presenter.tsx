import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  Login,
  Logo,
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
              <button onClick={props.onClickLogout}>로그아웃</button>
            </>
          ) : (
            <Login onClick={props.onClickLogin}>로그인</Login>
          )}
          |<Login onClick={props.onClickSignUp}>회원가입</Login>
        </RightTop>
      </Wrapper>
    </StickyWrapper>
  );
}
