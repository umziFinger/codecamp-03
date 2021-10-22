import {
  Date,
  DateTitle,
  Index,
  IndexTitle,
  MyItems,
  MyPickeditem,
  MyProfile,
  MyUseditem,
  Name,
  NameTitle,
  Price,
  PriceTitle,
  ProfileImage,
  ProfileName,
  ProfilePoint,
  ProfileWrapper,
  Remarks,
  RemarksTitle,
  Row,
  SoldOut,
  Title,
  Wrapper,
  Wrapper1,
} from "./myUseditem.styles";

export default function MyUseditemUI(props) {
  return (
    <Wrapper1>
      <Wrapper>
        <Title>
          <MyUseditem
            isMyUseditem={props.isMyUseditem}
            onClick={props.onClickMyUseditem}
          >
            나의상품
          </MyUseditem>
          <MyPickeditem
            isMyUseditem={props.isMyUseditem}
            onClick={props.onClickMyPick}
          >
            마이찜
          </MyPickeditem>
        </Title>
        {props.isMyUseditem ? (
          <MyItems>
            <Row>
              <IndexTitle>번호</IndexTitle>
              <NameTitle>상품명</NameTitle>
              <RemarksTitle>한줄설명</RemarksTitle>
              <PriceTitle>가격</PriceTitle>
              <DateTitle>등록일</DateTitle>
            </Row>
            {props.data?.fetchUseditemsISold.map((el, i) => (
              <Row id={el._id} onClick={props.onClickMyItem}>
                <Index>{i + 1}</Index>
                <Name>{el.name}</Name>
                <Remarks>{el.remarks}</Remarks>
                {el.buyer?.name ? (
                  <SoldOut>판매완료</SoldOut>
                ) : (
                  <Price>{el.price.toLocaleString()} 원</Price>
                )}
                <Date>{el.createdAt.slice(0, 10)}</Date>
              </Row>
            ))}
          </MyItems>
        ) : (
          <MyItems>
            <Row>
              <IndexTitle>번호</IndexTitle>
              <NameTitle>상품명</NameTitle>
              <RemarksTitle>한줄설명</RemarksTitle>
              <PriceTitle>가격</PriceTitle>
              <DateTitle>등록일</DateTitle>
            </Row>
            {props.pickeddata?.fetchUseditemsIPicked.map((el, i) => (
              <Row id={el._id} onClick={props.onClickMyItem}>
                <Index>{i + 1}</Index>
                <Name>{el.name}</Name>
                <Remarks>{el.remarks}</Remarks>
                {el.buyer?.name ? (
                  <SoldOut>SOLD OUT</SoldOut>
                ) : (
                  <Price>{el.price.toLocaleString()} 원</Price>
                )}
                <Date>{el.createdAt.slice(0, 10)}</Date>
              </Row>
            ))}
          </MyItems>
        )}
      </Wrapper>
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
    </Wrapper1>
  );
}
