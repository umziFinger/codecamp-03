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
} from '../../../../styles/viewboardstyle'

import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents
        }
    }
`

export default function ViewBoardPage() {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.boardId}
    })

    return(

        <Wrapper>
            <Header>
                <Profile>
                    <HeaderLeft>
                        <ProfileImg src="/images/profile.png" />
                        <ProfileName>
                            
                            <div>{data ? data.fetchBoard.writer: "loading.."}</div>
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
                <Title>{data ? data.fetchBoard.title : "loading.."}</Title>
                <Picture></Picture>
                <Contents>{data ? data.fetchBoard.contents: "loading.."}</Contents>
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