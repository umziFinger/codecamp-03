import styled from "@emotion/styled";
import { IProps } from "./MyForm.types";

export const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "none")};
`;
