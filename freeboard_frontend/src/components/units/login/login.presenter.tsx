import {
  CheckBox,
  IdPw,
  Line,
  LoginButton,
  LoginFooter,
  LoginInput,
  Logo,
  Wrapper,
} from "./login.styles";

export default function LoginUI(props: any) {
  return (
    <Wrapper>
      <Logo>LOGO</Logo>
      <LoginInput>
        <IdPw
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeInputs}
        />
        <IdPw
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangeInputs}
        />
        <CheckBox>
          <input type="radio" /> 로그인상태 유지하기
        </CheckBox>
      </LoginInput>
      <div>
        <LoginButton onClick={props.onClickLogin}>로그인하기</LoginButton>
      </div>
      <Line></Line>
      {/* 선 */}
      <LoginFooter>
        <span>이메일 찾기</span>|<span>비밀번호 찾기</span>|
        <span>회원가입</span>
      </LoginFooter>
    </Wrapper>
  );
}
