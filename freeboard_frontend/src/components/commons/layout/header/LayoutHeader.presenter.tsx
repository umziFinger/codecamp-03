import { Login, Logo, StickyWrapper, Wrapper } from "./LayoutHeader.styled";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <div>
        <Logo>LOGO</Logo>
        <div>
          <Login>로그인 | </Login>
          <Login>회원가입</Login>
        </div>
      </div>
    </Wrapper>
  );
}
