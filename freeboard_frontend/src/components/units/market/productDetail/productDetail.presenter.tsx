import {
  Body,
  Buttons,
  Carousel,
  ContentsTags,
  Header,
  Heart,
  Icons,
  Like,
  Line,
  LinkIcon,
  MainWrapper,
  Map,
  MapIcon,
  Name,
  Price,
  Profile,
  ProfileIcon,
  Remarks,
  Seller,
  Title,
  ToBuy,
  ToList,
  Wrapper,
} from "./productDetail.styles";

export default function ProductDetailUI(props) {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>
          <Profile>
            <ProfileIcon src="/images/profile.png" />
            <div>
              <Seller>{props.data?.fetchUseditem.seller.name}</Seller>
              <div>date:{props.data?.fetchUseditem.createdAt.slice(0, 10)}</div>
            </div>
          </Profile>
          <Icons>
            <LinkIcon src="/images/link.png" />
            <MapIcon src="/images/map.png" />
          </Icons>
        </Header>
        <Line></Line>
        <Body>
          <Title>
            <div>
              <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
              <Name>{props.data?.fetchUseditem.name}</Name>
            </div>
            <Like>
              <Heart src="/images/heart.png" />
              <div>{props.data?.fetchUseditem.pickedCount}</div>
            </Like>
          </Title>
          <Price>{props.data?.fetchUseditem.price}</Price>
          <Carousel></Carousel>
          <ContentsTags>
            <div>{props.data?.fetchUseditem.contents}</div>
            <div>태그 태그 태그</div>
          </ContentsTags>
        </Body>
        <Line></Line>
        <Map></Map>
        <Line></Line>
        <Buttons>
          <ToList>목록으로</ToList>
          <ToBuy>구매하기</ToBuy>
        </Buttons>
      </MainWrapper>
    </Wrapper>
  );
}
