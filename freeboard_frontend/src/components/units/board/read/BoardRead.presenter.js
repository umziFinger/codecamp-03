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
    DisLikeDiv
} from './BoardRead.styled'

export default function BoardReadUI(props) {

    return(
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
    )

}