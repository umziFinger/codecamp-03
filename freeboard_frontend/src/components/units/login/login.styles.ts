import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 80px;
  font-weight: bold;
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const IdPw = styled.input`
  width: 500px;
  height: 80px;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
`;

export const CheckBox = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;

export const LoginButton = styled.button`
  width: 500px;
  height: 80px;
  border-radius: 20px;
  margin: 50px;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;

export const Line = styled.div`
  width: 500px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const LoginFooter = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
`;
