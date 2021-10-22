import {
  Amount,
  AmountTitle,
  Balance,
  BalanceTitle,
  Contents,
  ContentsTitle,
  Date,
  DateTitle,
  MyItems,
  Row,
  Title,
  Wrapper,
} from "./myPoint.styles";

export default function MyPointUI(props) {
  return (
    <Wrapper>
      <Title>포인트 사용내역</Title>
      <MyItems>
        <Row>
          <DateTitle>날짜</DateTitle>
          <ContentsTitle>내용</ContentsTitle>
          <AmountTitle>금액</AmountTitle>
          <BalanceTitle>잔액</BalanceTitle>
        </Row>
        {props.data?.fetchPointTransactions.map((el, i) => (
          <Row id={el._id}>
            <Date>{el.createdAt.slice(0, 10)}</Date>
            <Contents status={el.status}>{el.status}</Contents>
            <Amount>
              {String(el.amount).split("")[0] !== "-" && "+"}
              {el.amount.toLocaleString()}원
            </Amount>
            <Balance>{el.balance.toLocaleString()} 원</Balance>
          </Row>
        ))}
      </MyItems>
    </Wrapper>
  );
}
