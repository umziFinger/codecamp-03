import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

const Submit = styled.button`
  margin-top: 80px;
  width: 180px;
  height: 52px;
  border: none;
  background-color: ${(props: IProps) => (props.isValid ? "#ffd600" : "")};
`;

export default function SubmitButton(props) {
  return <Submit isValid={props.isValid}>{props.name}</Submit>;
}
