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
    CommentIcon,
    CommentWriter,
    CommentContents,
    Row,
    CommentProfileImage,
    CommentMap,
    CommentEditButton,
    CommentDeleteButton,
    MapWriter,
    CommentButton,
    MapContents,
    MapDate,
    CommentProfileImageBox,
    MapBox,
    MapWriteRating,
    EditBox,
    CommentWrapper,
    CommentTop,
    CommentPassword,
    CommentTitle,
    CommentLengthCheckBox,
    MapRating,
    ContentsInputBox
} from './BoardRead.styled'

export default function BoardReadUI(props) {

    return(
        <>
            <Main>
                <Wrapper>
                    <Header>
                        <Profile>
                            <HeaderLeft>
                                <ProfileImg src="/images/profile.png" />
                                <ProfileName>
                                    
                                    <div>{props.data ? props.data.fetchBoard.writer: "loading.."}</div>
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
                        <Title>{props.data ? props.data.fetchBoard.title : "loading.."}</Title>
                        <Picture></Picture>
                        <Contents>{props.data ? props.data.fetchBoard.contents: "loading.."}</Contents>
                    </Body>
                    <Youtube>유튜브 링크</Youtube>
                    <Footer>
                        <LikeDiv>
                            <Like src="/images/like.png" />
                            1920
                        </LikeDiv>
                        <DisLikeDiv>
                            <Like src="/images/dislike.png" />
                            1920
                        </DisLikeDiv>
                    </Footer>
                </Wrapper>
                <ButtonBox>
                    <ChangeButton onClick={props.onClickMoveToList}>목록으로</ChangeButton>
                    <ChangeButton onClick={props.onClickEdit}>수정하기</ChangeButton>
                    <ChangeButton onClick={props.onClickDelete}>삭제하기</ChangeButton>
                </ButtonBox>
            </Main>
            <CommentWrapper>
                <div>
                    <CommentTitle><CommentIcon src="/images/comment.png"/>댓글</CommentTitle>
                    <div> {/*댓글작성*/}
                        <CommentTop>
                            <CommentWriter type="text" placeholder="작성자" onChange={props.onChangeCommentWriter}/>
                            <CommentPassword type="password" placeholder="비밀번호" onChange={props.onChangeCommentPassword}/>
                            <div><img src="/images/Star.png"/><img src="/images/Star.png"/><img src="/images/Star.png"/><img src="/images/Star.png"/><img src="/images/Star.png"/></div>
                        </CommentTop>
                        <ContentsInputBox>
                            <CommentContents type="text" placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고, 불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." onChange={props.onChangeCommentContents}/>
                            <CommentLengthCheckBox>
                                <div>0/100</div>
                                <CommentButton onClick={props.onClickCreateComment}>등록하기</CommentButton>
                            </CommentLengthCheckBox>
                        </ContentsInputBox>
                    </div> 
                    {props.commentdata?.fetchBoardComments.map((el) => (
                        <CommentMap> {/*댓글조회*/}
                            <Row>
                                <CommentProfileImageBox><CommentProfileImage src="/images/profile.png"/></CommentProfileImageBox>
                                <MapBox>
                                    <MapWriteRating>
                                        <MapWriter>{el.writer}</MapWriter>
                                        <MapRating>{el.rating}</MapRating>
                                    </MapWriteRating>
                                    <MapContents>{el.contents}</MapContents>
                                    
                                </MapBox>
                                
                                <EditBox>
                                    <CommentEditButton src="/images/edit.png" onClick={props.onClickCommentEdit}/>
                                    <CommentDeleteButton src="/images/delete.png"/>
                                </EditBox>
                            </Row>
                            <MapDate>{el.createdAt.slice(0,10)}</MapDate>
                        </CommentMap>
                    ))}
                </div>
            </CommentWrapper>
        </>
        
    )

}