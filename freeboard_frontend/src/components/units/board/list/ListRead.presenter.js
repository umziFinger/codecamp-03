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
    MenuDate
} from "./ListRead.styled";

export default function ListReadUI(props) {

    return(

        <>
            <Wrapper>
                <Title>베스트 게시글</Title>
                <Top>
                    <BestContents>
                        <Img src="/images/풀때기.png" />
                        <Info>
                            <InfoTitle>게시물 제목입니다.</InfoTitle>
                            <InfoBottom>
                                <InfoBottomLeft>
                                    <Profile><ProfileImg src="/images/profile.png"/><ProfileName>노원두</ProfileName></Profile>
                                    <Date>Date:2021.02.18</Date>
                                </InfoBottomLeft>
                                <InfoBottomRight><Like src="/images/like.png"/><div>356</div></InfoBottomRight>
                            </InfoBottom>
                        </Info>
                    </BestContents>
                    <BestContents>
                        <Img src="/images/핸드폰.png" />
                        <Info>
                            <InfoTitle>게시물 제목입니다.</InfoTitle>
                            <InfoBottom>
                                <InfoBottomLeft>
                                    <Profile><ProfileImg src="/images/profile.png"/><ProfileName>노원두</ProfileName></Profile>
                                    <Date>Date:2021.02.18</Date>
                                </InfoBottomLeft>
                                <InfoBottomRight><Like src="/images/like.png"/><div>356</div></InfoBottomRight>
                            </InfoBottom>
                        </Info>
                    </BestContents>
                    <BestContents>
                        <Img src="/images/발표.png" />
                        <Info>
                            <InfoTitle>게시물 제목입니다.</InfoTitle>
                            <InfoBottom>
                                <InfoBottomLeft>
                                    <Profile><ProfileImg src="/images/profile.png"/><ProfileName>노원두</ProfileName></Profile>
                                    <Date>Date:2021.02.18</Date>
                                </InfoBottomLeft>
                                <InfoBottomRight><Like src="/images/like.png"/><div>356</div></InfoBottomRight>
                            </InfoBottom>
                        </Info>
                    </BestContents>
                    <BestContents>
                        <Img src="/images/화로.png" />
                        <Info>
                            <InfoTitle>게시물 제목입니다.</InfoTitle>
                            <InfoBottom>
                                <InfoBottomLeft>
                                    <Profile><ProfileImg src="/images/profile.png"/><ProfileName>노원두</ProfileName></Profile>
                                    <Date>Date:2021.02.18</Date>
                                </InfoBottomLeft>
                                <InfoBottomRight><Like src="/images/like.png"/><div>356</div></InfoBottomRight>
                            </InfoBottom>
                        </Info>
                    </BestContents>
                </Top>
                <Search>
                    <SearchTitle>
                        <img src="/images/돋보기.png"/>
                        <InputTitle type="text" placeholder="제목을 검색해주세요."/>
                    </SearchTitle>
                    <InputDate type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD"/>
                    <Button>검색하기</Button>
                </Search>
                <List>
                    <ListMenu>
                        <MenuNumber>번호</MenuNumber>
                        <MenuTitle>제목</MenuTitle>
                        <MenuWriter>작성자</MenuWriter>
                        <MenuDate>날짜</MenuDate>
                    </ListMenu>
                    {props.data?.fetchBoards.map((el, index)=>(
                        <Row key={el._id}>
                            <Column1>{index+1}</Column1>
                            <Column2>{el.title}</Column2>
                            <Column3>{el.writer}</Column3>
                            <Column4>{el.createdAt.slice(0,10)}</Column4>
                        </Row>
                    )).reverse()}
                </List>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </Wrapper>
        </>

    )

}