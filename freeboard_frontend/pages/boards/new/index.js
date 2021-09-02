import { 
    Wrapper1, 
    Wrapper, 
    Title, 
    NamePw, 
    Name, 
    TitleContents, 
    Title2, 
    Content, 
    Adress,
    AdressNumber, 
    AdressButton, 
    DetailAdress, 
    YoutubeLink, 
    Photo, 
    GetPhoto, 
    MainSetting, 
    Confirm, 
    Option, 
    Star, 
    ErrorMessage, 
    Neyoung,
    Youtube
} from '../../../styles/Example';

import {useState} from 'react'


export default function BoardsNewPage() {
    
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentError, setContentError] = useState("")

    function onChangeName(event) {
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("")
        }
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError("")
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("")
        }
    }

    function onChangeContent(event) {
        setContent(event.target.value)
        if(event.target.value !== ""){
            setContentError("")
        }
    }

    function check() {

        if(name === ""){
            setNameError("작성자를 입력해주세요.")
        }

        if(password === ""){
            setPasswordError("비밀번호를 입력해주세요.")
        }

        if(title === ""){
            setTitleError("제목을 입력해주세요.")
        }

        if(content === ""){
            setContentError("내용을 입력해주세요.")
        }

    }
    return (
        <Wrapper1>
            <Wrapper>
                <Title>게시물 등록</Title>
                <NamePw>
                    <div>작성자
                        <Star>*</Star>
                        <br/>
                        <Name type="text" placeholder="이름을 적어주세요." onChange={onChangeName}/>
                        <ErrorMessage>{nameError}</ErrorMessage>
                    </div>
                    <div>비밀번호<br/>
                        <Name type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}/>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    </div>
                </NamePw>    
                <TitleContents>제목<br/>
                    <Title2 type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}/>
                    <ErrorMessage>{titleError}</ErrorMessage>
                    <Neyoung>내용</Neyoung>
                    <br/>
                    <Content type="text" placeholder="내용을 작성해주세요." onChange={onChangeContent}/>
                    <ErrorMessage>{contentError}</ErrorMessage>
                </TitleContents>
                <Adress>주소
                    <div>
                        <AdressNumber type="text"/>
                        <AdressButton>우편번호 검색</AdressButton>
                    </div>
                    <DetailAdress type="text"/>
                    <DetailAdress type="text"/>
                </Adress>
                <Youtube>유튜브<br/>
                    <YoutubeLink type="text" placeholder="링크를 복사해주세요."/>
                </Youtube>
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
                <Confirm onClick={check}>등록하기</Confirm>
            </Wrapper>
        </Wrapper1>
    )
}