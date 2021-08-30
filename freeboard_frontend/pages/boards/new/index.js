import { Wrapper1, Wrapper, Title, NamePw, Name, TitleContents, Title2, Content, Adress,AdressNumber, AdressButton, DetailAdress, YoutubeLink, Photo, GetPhoto, MainSetting, Confirm, Option, Star } from '../../../styles/Example';

export default function BoardsNewPage() {
    

    return (
        <Wrapper1>
            <Wrapper>
                <Title>게시물 등록</Title>
                <NamePw>
                    <div>작성자
                        <Star>*</Star>
                        <br/>
                        <Name type="text" placeholder="이름을 적어주세요."/>
                    </div>
                    <div>비밀번호<br/>
                        <Name type="password" placeholder="비밀번호를 입력해주세요."/>
                    </div>
                </NamePw>    
                <TitleContents>제목<br/>
                    <Title2 type="text" placeholder="제목을 작성해주세요."/>
                    내용<br/>
                    <Content type="text" placeholder="내용을 작성해주세요."/>
                </TitleContents>
                <Adress>주소
                    <div>
                        <AdressNumber type="text"/>
                        <AdressButton>우편번호 검색</AdressButton>
                    </div>
                    <DetailAdress type="text"/>
                    <DetailAdress type="text"/>
                </Adress>
                <div>유튜브<br/>
                    <YoutubeLink type="text" placeholder="링크를 복사해주세요."/>
                </div>
                <div>사진 첨부
                    <GetPhoto>
                        <Photo>
                            <div>+</div>
                            <div>Upload</div>
                        </Photo>
                        <Photo>
                            <div>+</div>
                            <div>Upload</div>
                        </Photo>
                        <Photo>
                            <div>+</div>
                            <div>Upload</div>
                        </Photo>
                    </GetPhoto>
                </div>
                <MainSetting>메인 설정
                    <Option>
                        <input type="radio" name="a"/> 유튜브
                        <input type="radio" name="a"/> 사진
                    </Option>
                </MainSetting>
                <Confirm>등록하기</Confirm>
            </Wrapper>
        </Wrapper1>
    )
}