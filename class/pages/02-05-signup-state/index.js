import {useState} from 'react'

import { ErrorMassage, Errormassage } from '../../styles/02-05-signup-statestyle'

export default function SignupStatePage() {

    const [email, setEmail] = useState()
    const [emailError, setEmailError] = useState()
    const [password1, setPassword1] = useState()
    const [password2, setPassword2] = useState()
    const [passwordError, setPasswordError] = useState()

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword1(event) {
        setPassword1(event.target.value)
    }

    function onChangePassword2(event) {
        setPassword2(event.target.value)
    }

    function onClickSignup() {

        if(!email.includes("@")) {
            setEmailError("@가 없습니다")
            // alert("@가 없습니다")
        }

        if(password1 !== password2){
            setPasswordError("비밀번호1과 비밀번호2가 다릅니다")
            // alert("비밀번호1과 비밀번호2가 다릅니다")
        }

        // console.log('email :', email)
        // console.log('password1 :', password1)
        // console.log('password2 :', password2)
    }

    return(
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/><br/>
            <ErrorMassage>{emailError}</ErrorMassage>
            비밀번호: <input type="password" onChange={onChangePassword1}/><br/>
            비밀번호확인: <input type="password" onChange={onChangePassword2}/><br/>
            <ErrorMassage>{passwordError}</ErrorMassage>
            <button onClick={onClickSignup}>회원가입하기</button>
        </div>
    )

}