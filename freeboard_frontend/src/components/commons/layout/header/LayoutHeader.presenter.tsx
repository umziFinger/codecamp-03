import { Login, Logo, Wrapper } from "./LayoutHeader.styled";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <Logo>LOGO</Logo>
      <div>
        <Login>로그인 | </Login>
        <Login>회원가입</Login>
      </div>
    </Wrapper>
  );
}
