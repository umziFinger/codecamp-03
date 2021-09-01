import { 
    Error,
    Bottom, 
    Eatsroad, 
    Input, 
    Inputbox, 
    Kakao, 
    Kakaologin, 
    Login, 
    Loginmenu, 
    Logo, 
    Menu, 
    Rec, 
    Under, 
    Wrapper 
} from '../../../styles/loginstyle'

import {useState} from 'react'

export default function LoginPage() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function check() {

        if(email === "" || !email.includes("@")){
            setEmailError("이메일 주소를 다시 확인해주세요.")
        }

        if(password === "" || password.length < 8) {
            setPasswordError("8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.")
        }

    }

    // function deleteEmail() {

    //     setEmail("")

    // }

    return(

        <Wrapper>               {/*wrapper*/}
            <Logo>               {/*logo*/}
                <Rec src='/images/logo.png'/>
                <img src='/images/rectangle.png'/>
                <Eatsroad>잇츠로드</Eatsroad>
            </Logo>
            <Bottom>
                <Inputbox>               {/*email*/}
                    <Input type="text" placeholder="이메일을 입력해 주세요." onChange={onChangeEmail}/>
                    <img src="/images/delete.png"/>
                </Inputbox>
                <div>
                    <Under src='/images/rectangle.png'/>
                    <Error>{emailError}</Error>
                </div>
                <Inputbox>               {/*password*/}
                    <Input type="password" placeholder="비밀번호를 확인해 주세요." onChange={onChangePassword}/>
                    <img src="/images/delete.png"/>
                </Inputbox>
                <div>
                    <Under src='/images/rectangle.png'/>
                    <Error>{passwordError}</Error>
                </div>
                <Login onClick={check}>로그인</Login>
                <Loginmenu>               {/*loginmenu*/}
                    <Menu>이메일 찾기</Menu>
                    <Menu>비밀번호 찾기</Menu>
                    <Menu>회원가입</Menu>
                </Loginmenu>
                <Kakao>               {/*kakao*/}
                    <Kakaologin>카카오톡으로 로그인</Kakaologin>
                </Kakao>
            </Bottom>
        </Wrapper>

    )

}