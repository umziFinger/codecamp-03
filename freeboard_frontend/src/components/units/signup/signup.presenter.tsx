import {
  ErrorMessage,
  Header,
  Inputs,
  InputsWrapper,
  SignUpButton,
  Wrapper,
} from "./signup.styles";
import { Modal } from "antd";

export default function SignUpUI(props: any) {
  return (
    <Wrapper>
      <Modal
        visible={props.isModalVisible}
        onCancel={props.closeModal}
        onOk={props.closeModal}
      >
        회원가입을 축하합니다!
      </Modal>
      <Header>회원가입</Header>
      <InputsWrapper>
        이메일
        <Inputs
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          onChange={props.onChangeInputs}
        />
        <ErrorMessage>{props.errors.emailError}</ErrorMessage>
        이름
        <Inputs
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          onChange={props.onChangeInputs}
        />
        <ErrorMessage>{props.errors.nameError}</ErrorMessage>
        비밀번호
        <Inputs
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangeInputs}
        />
        <ErrorMessage>{props.errors.passwordError}</ErrorMessage>
        비밀번호 확인
        <Inputs
          type="password"
          name="password2"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangePassword2}
        />
        <ErrorMessage>{props.errors.passwordError}</ErrorMessage>
      </InputsWrapper>
      <SignUpButton onClick={props.onClickSignUp}>회원가입하기</SignUpButton>
    </Wrapper>
  );
}
