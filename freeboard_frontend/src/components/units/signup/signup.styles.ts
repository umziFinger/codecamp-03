import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 80px;
  font-weight: bold;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Inputs = styled.input`
  width: 500px;
  height: 80px;
  margin: 20px 0px 20px 0px;
  border-radius: 15px;
  padding: 20px;
`;

export const SignUpButton = styled.button`
  width: 500px;
  height: 80px;
  margin: 20px;
  border-radius: 15px;
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;
