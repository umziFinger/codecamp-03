
import { HeaderBar, Leem, My, MyProfile, ProfileBox, Wrapper, WrapperIn, Name, ProfileArrow, Menu, MenuContent, FAQ, QuestionBox, Q1, Q, QuestionNumber, QuestionTitle, Search, Footer, FooterImage, FooterMenu, MyHome, MenuName, BarMenu } from '../../../styles/faq';

export default function Faq() {

    return(

        <Wrapper>
            <WrapperIn>
                <HeaderBar>
                    <BarMenu src="/images/bar.png" />
                </HeaderBar>
                <ProfileBox>
                    <Search src="/images/search.png"></Search>
                    <MyProfile>
                        <My>마이</My>
                        <Leem>
                            <img src="/images/img-60-profile-image.png"/>
                            <Name>임정아</Name>
                            <ProfileArrow src="/images/arrow.png"/>
                        </Leem>                     
                    </MyProfile>
                    <Menu>
                        <MenuContent>공지사항</MenuContent> 
                        <MenuContent>이벤트</MenuContent> 
                        <FAQ>FAQ</FAQ> 
                        <MenuContent>Q&A</MenuContent> 
                    </Menu>
                </ProfileBox>
                <QuestionBox>
                    <Q>
                        <div>
                            <QuestionNumber>Q.01</QuestionNumber>
                            <QuestionTitle>리뷰 작성은 어떻게 하나요?</QuestionTitle>
                        </div>
                        <img src="/images/arrow-right.png" />
                    </Q>
                    <Q>
                        <div>
                            <QuestionNumber>Q.01</QuestionNumber>
                            <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
                        </div>
                        <img src="/images/arrow-right.png" />
                    </Q>
                    <Q>
                        <div>
                            <QuestionNumber>Q.01</QuestionNumber>
                            <QuestionTitle>아이디/비밀번호를 잊어버렸어요.</QuestionTitle>
                        </div>
                        <img src="/images/arrow-right.png" />
                    </Q>
                    <Q>
                        <div>
                            <QuestionNumber>Q.01</QuestionNumber>
                            <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
                        </div>
                        <img src="/images/arrow-right.png" />
                    </Q>
                    <Q>
                        <div>
                            <QuestionNumber>Q.01</QuestionNumber>
                            <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
                        </div>
                        <img src="/images/arrow-right.png" />
                    </Q>
                    <Q>
                        <div>
                            <QuestionNumber>Q.01</QuestionNumber>
                            <QuestionTitle>비밀번호를 변경하고 싶어요.</QuestionTitle>
                        </div>
                        <img src="/images/arrow-right.png" />
                    </Q>
                    
                </QuestionBox>
                <Footer>
                    <FooterMenu>
                        <FooterImage src="/images/home.png"/>
                        <MenuName>홈</MenuName>
                    </FooterMenu>
                    <FooterMenu>
                        <FooterImage src="/images/location.png"/>
                        <MenuName>잇츠로드</MenuName>
                    </FooterMenu>
                    <FooterMenu>
                        <FooterImage src="/images/like.png"/>
                        <MenuName>마이찜</MenuName>
                    </FooterMenu>
                    <FooterMenu>
                        <FooterImage src="/images/my.png"/>
                        <MyHome>마이</MyHome>
                    </FooterMenu>
                </Footer>
            </WrapperIn>
        </Wrapper>

    )

}