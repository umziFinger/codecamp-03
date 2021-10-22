import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const MyItems = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 50px;
`;

export const Row = styled.div`
  width: 1200px;
  display: flex;
  height: 50px;
  :hover {
    background-color: #ffd600;
  }
  cursor: pointer;
`;

export const Date = styled.div`
  width: 25%;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  align-items: center;
  padding-left: 40px;
  font-weight: bold;
`;

export const Contents = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: ${(props) =>
    props.status === "구매"
      ? "red"
      : props.status === "판매"
      ? "blue"
      : "yellow"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Amount = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Balance = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const DateTitle = styled.div`
  width: 25%;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export const ContentsTitle = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AmountTitle = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BalanceTitle = styled.div`
  width: 25%;
  border-bottom: 1px solid #bdbdbd;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
