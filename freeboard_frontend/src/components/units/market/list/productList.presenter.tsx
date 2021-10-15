import {
  Contents,
  ContentsLeft,
  ContentsLeftBottom,
  EmptyImage,
  Heart,
  Image,
  MainWrapper,
  Name,
  NoneImage,
  Price,
  ProfileIcon,
  Row,
  TodayView,
  TodayViewImage,
  TodayViewProduct,
  Wrapper,
} from "./productList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductListUI(props) {
  return (
    <Wrapper>
      <MainWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el) => (
            <Row
              id={el._id}
              key={el._id}
              onClick={props.onClickMoveToDetail(el)}
            >
              {el.images[0] ? (
                <Image src={`https://storage.googleapis.com/${el.images[0]}`} />
              ) : (
                <NoneImage></NoneImage>
              )}
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
                <Price>
                  <img src="/images/priceIcon.png" />
                  {el.price.toLocaleString()}원
                </Price>
              </Contents>
            </Row>
          ))}
        </InfiniteScroll>
      </MainWrapper>
      <div>
        <TodayView>
          today!
          {props.todayView?.length > 5
            ? props.todayView
                .slice(props.todayView?.length - 5, props.todayView?.length)
                .map((el) => (
                  <TodayViewProduct
                    id={el._id}
                    key={el._id}
                    onClick={props.onClickMoveToTodayView}
                  >
                    {el.images.length ? (
                      <TodayViewImage
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    ) : (
                      <EmptyImage></EmptyImage>
                    )}
                    <div>{el.name}</div>
                    <div>{el.price.toLocaleString()}원</div>
                  </TodayViewProduct>
                ))
                .reverse()
            : props.todayView
                ?.map((el) => (
                  <TodayViewProduct
                    id={el._id}
                    key={el._id}
                    onClick={props.onClickMoveToTodayView}
                  >
                    {el.images.length ? (
                      <TodayViewImage
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    ) : (
                      <EmptyImage></EmptyImage>
                    )}
                    <div>{el.name}</div>
                    <div>{el.price.toLocaleString()}원</div>
                  </TodayViewProduct>
                ))
                .reverse()}
        </TodayView>
      </div>
    </Wrapper>
  );
}
