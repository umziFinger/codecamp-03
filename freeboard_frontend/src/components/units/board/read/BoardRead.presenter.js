import ReactPlayer from "react-player";
import {
  Body,
  Header,
  HeaderLeft,
  HeaderRight,
  Link,
  Profile,
  ProfileImg,
  ProfileName,
  Wrapper,
  Map,
  Title,
  Picture,
  Contents,
  Youtube,
  Footer,
  Like,
  LikeDiv,
  DisLikeDiv,
  Main,
  ChangeButton,
  ButtonBox,
} from "./BoardRead.styled";

export default function BoardReadUI(props) {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>
            <Profile>
              <HeaderLeft>
                <ProfileImg src="/images/profile.png" />
                <ProfileName>
                  <div>
                    {props.data ? props.data.fetchBoard.writer : "loading.."}
                  </div>
                  <div>Date</div>
                </ProfileName>
              </HeaderLeft>
              <HeaderRight>
                <Link src="/images/link.png" />
                <Map src="/images/map.png" />
              </HeaderRight>
            </Profile>
          </Header>
          <Body>
            <Title>
              {props.data ? props.data.fetchBoard.title : "loading.."}
            </Title>
            <Picture></Picture>
            <Contents>
              {props.data ? props.data.fetchBoard.contents : "loading.."}
            </Contents>
          </Body>
          <Youtube>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=iAFsmUMt0So&list=RDiAFsmUMt0So&start_radio=1"
              width={486}
              height={240}
              {...props}
            />
          </Youtube>
          <Footer>
            <LikeDiv>
              <Like src="/images/like.png" onClick={props.onClickLikeUp} />
              {props.data?.fetchBoard.likeCount}
            </LikeDiv>
            <DisLikeDiv>
              <Like
                src="/images/dislike.png"
                onClick={props.onClickDisLikeUp}
              />
              {props.data?.fetchBoard.dislikeCount}
            </DisLikeDiv>
          </Footer>
        </Wrapper>
        <ButtonBox>
          <ChangeButton onClick={props.onClickMoveToList}>
            목록으로
          </ChangeButton>
          <ChangeButton onClick={props.onClickEdit}>수정하기</ChangeButton>
          <ChangeButton onClick={props.onClickDelete}>삭제하기</ChangeButton>
        </ButtonBox>
      </Main>
    </>
  );
}
