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
  SliderEmptyImage,
  SliderImage,
  SliderWrapper,
  Title,
  ToBuy,
  ToList,
  Wrapper,
} from "./productDetail.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dompurify from "dompurify";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
};

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
              <Heart src="/images/heart.png" onClick={props.onClickPick} />
              <div>{props.data?.fetchUseditem.pickedCount}</div>
            </Like>
          </Title>
          <Price>{props.data?.fetchUseditem.price}</Price>
          <SliderWrapper>
            <Slider {...settings}>
              <div>
                {props.data?.fetchUseditem.images[0] ? (
                  <SliderImage
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
                  />
                ) : (
                  <SliderEmptyImage></SliderEmptyImage>
                )}
              </div>
              <div>
                {props.data?.fetchUseditem.images[1] ? (
                  <SliderImage
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`}
                  />
                ) : (
                  <SliderEmptyImage></SliderEmptyImage>
                )}
              </div>
            </Slider>
          </SliderWrapper>
          <ContentsTags>
            <div
              dangerouslySetInnerHTML={{
                __html: props.data?.fetchUseditem.contents,
              }}
            />
            <div>태그 태그 태그</div>
          </ContentsTags>
        </Body>
        <Line></Line>
        <Map id="map"></Map>
        <Line></Line>
        <Buttons>
          {props.data?.fetchUseditem.seller.email ===
          props.userdata?.fetchUserLoggedIn.email ? (
            <>
              <ToList onClick={props.onClickMoveToList}>목록으로</ToList>
              <ToBuy onClick={props.onClickUpdate}>수정하기</ToBuy>
              <ToBuy onClick={props.onClickDelete}>삭제하기</ToBuy>
            </>
          ) : (
            <>
              <ToList onClick={props.onClickMoveToList}>목록으로</ToList>
              <ToBuy onClick={props.onClickBuy}>구매하기</ToBuy>
            </>
          )}
        </Buttons>
      </MainWrapper>
    </Wrapper>
  );
}
