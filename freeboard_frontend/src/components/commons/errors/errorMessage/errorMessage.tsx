import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  margin-top: 10px;
`;

export default function ErrorMessage(props) {
  return <Error>{props.message}</Error>;
}
