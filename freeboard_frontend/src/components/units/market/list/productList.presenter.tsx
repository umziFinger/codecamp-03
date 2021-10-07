import {
  Contents,
  ContentsLeft,
  ContentsLeftBottom,
  Heart,
  Image,
  MainWrapper,
  Name,
  ProfileIcon,
  Row,
  Wrapper,
} from "./productList.styles";

export default function ProductListUI(props) {
  return (
    <Wrapper>
      <MainWrapper>
        <div>상품 목록</div>
        {props.data?.fetchUseditems.map((el) => (
          <Row key={el._id}>
            <Image></Image>
            <Contents>
              <ContentsLeft>
                <Name>{el.name}</Name>
                <div>{el.remarks}</div>
                <div>{el.tags}</div>
                <ContentsLeftBottom>
                  <ContentsLeftBottom>
                    <ProfileIcon src="/images/profile.png" />
                    <div>{el.seller.name}</div>
                  </ContentsLeftBottom>
                  <ContentsLeftBottom>
                    <Heart src="/images/heart.png" />
                    <div>{el.pickedCount}</div>
                  </ContentsLeftBottom>
                </ContentsLeftBottom>
              </ContentsLeft>
              <div>{el.price}</div>
            </Contents>
          </Row>
        ))}
      </MainWrapper>
    </Wrapper>
  );
}
