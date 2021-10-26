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
  MyProfile,
  ProfileImage,
  ProfileName,
  ProfilePoint,
  ProfileWrapper,
  Row,
  Title,
  Wrapper,
} from "./myPoint.styles";

export default function MyPointUI(props: any) {
  return (
    <Wrapper>
      <div>
        <Title>포인트 사용내역</Title>
        <MyItems>
          <Row>
            <DateTitle>날짜</DateTitle>
            <ContentsTitle>내용</ContentsTitle>
            <AmountTitle>금액</AmountTitle>
            <BalanceTitle>잔액</BalanceTitle>
          </Row>
          {props.data?.fetchPointTransactions.map((el: any, i: any) => (
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
      </div>
      <ProfileWrapper>
        <ProfileName>
          {props.userdata?.fetchUserLoggedIn.name}님 환영합니다!
        </ProfileName>
        <div>
          <ProfileImage src="/images/profile.png" />
        </div>
        <ProfilePoint>
          보유 포인트 : {props.userdata?.fetchUserLoggedIn.userPoint.amount}
          포인트
        </ProfilePoint>
        <div onClick={props.onClickMoveToPointDetail}>포인트 사용내역</div>
        <MyProfile>내 프로필</MyProfile>
        <div>비밀번호 변경</div>
      </ProfileWrapper>
    </Wrapper>
  );
}
