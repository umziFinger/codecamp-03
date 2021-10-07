import {
  Column4,
  Column3,
  Column2,
  Column1,
  Row,
  List,
  Title,
  Wrapper,
  BestContents,
  Info,
  InfoBottom,
  InfoBottomLeft,
  InfoTitle,
  ProfileImg,
  ProfileName,
  Profile,
  Like,
  InfoBottomRight,
  Date,
  Img,
  Top,
  Search,
  SearchTitle,
  InputTitle,
  InputDate,
  Button,
  ListMenu,
  MenuNumber,
  MenuTitle,
  MenuWriter,
  MenuDate,
  NewBoardButton,
  Page,
  NextPrevPage,
  PageWrapper,
  Keyword,
} from "./ListRead.styled";

export default function ListReadUI(props) {
  return (
    <>
      <Wrapper>
        <Title>베스트 게시글</Title>
        <Top>
          {props.bestBoardData?.fetchBoardsOfTheBest.map((el, index) => (
            <BestContents
              key={el._id}
              id={el._id}
              onClick={props.onClickBestBoard}
            >
              <Img src="/images/풀때기.png" />
              <Info>
                <InfoTitle>{el.title}</InfoTitle>
                <InfoBottom>
                  <InfoBottomLeft>
                    <Profile>
                      <ProfileImg src="/images/profile.png" />
                      <ProfileName>{el.writer}</ProfileName>
                    </Profile>
                    <Date>{el.createdAt.slice(0, 10)}</Date>
                  </InfoBottomLeft>
                  <InfoBottomRight>
                    <Like src="/images/like.png" />
                    <div>{el.likeCount}</div>
                  </InfoBottomRight>
                </InfoBottom>
              </Info>
            </BestContents>
          ))}
        </Top>
        <Search>
          <SearchTitle>
            <img src="/images/돋보기.png" />
            <InputTitle
              type="text"
              placeholder="제목을 검색해주세요."
              onChange={props.onChangeSearch}
            />
          </SearchTitle>
          <InputDate type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
          <Button onClick={props.onClickSearch}>검색하기</Button>
        </Search>
        <List>
          <Row>
            <MenuNumber>번호</MenuNumber>
            <MenuTitle>제목</MenuTitle>
            <MenuWriter>작성자</MenuWriter>
            <MenuDate>날짜</MenuDate>
          </Row>
          {props.data?.fetchBoards
            .map((el, index) => (
              <Row id={el._id} key={el._id} onClick={props.moveToRead}>
                <Column1>{index + 1}</Column1>
                <Column2>
                  {el.title
                    .replaceAll(props.keyword, `$${props.keyword}$`)
                    .split("$")
                    .map((el) => (
                      <Keyword isMatched={props.keyword === el}>{el}</Keyword>
                    ))}
                </Column2>
                {/* 리스트에서 특정 보드로 이동할때 ID값을 받아와야 하는데 컨테이너에서 그냥 _id로 쓰면 읽지 못하므로 프레젠터에서 el._id로 불러온후 id값에 저장하고 그 id를 불러와야함 */}
                <Column3>{el.writer}</Column3>
                <Column4>{el.createdAt.slice(0, 10)}</Column4>
              </Row>
            ))
            .reverse()}
        </List>
        <PageWrapper>
          <NextPrevPage onClick={props.onClickPrevPage}>Prev</NextPrevPage>
          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.pageCount && (
                <Page
                  id={String(props.startPage + index)}
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  colorChange={props.currentPage === props.startPage + index}
                >
                  {props.startPage + index}
                </Page>
              )
          )}
          <NextPrevPage onClick={props.onClickNextPage}>Next</NextPrevPage>
        </PageWrapper>
        <div>
          <div></div>
          <NewBoardButton onClick={props.moveToNew}>
            <img src="/images/pencil.png" />
            게시물 등록하기
          </NewBoardButton>
        </div>
      </Wrapper>
    </>
  );
}
