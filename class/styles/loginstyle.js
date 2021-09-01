import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    background-image: url('/images/background.png');
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 224px;
    padding-bottom: 83px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.div`
    width: 218px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Rec = styled.img`
    margin-bottom: -20px;
    z-index: 1;
`

export const Eatsroad = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: white;
    margin-top: 27px;
`

export const Bottom = styled.div`
    margin-top: 90px;
    width: 540px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Inputbox = styled.div`
    width: 540px;
    height: 30px;
    /* background-color: grey; */
    margin-top: 40px;
`

export const Input = styled.input`
    width: 520px;
    height: 30px;
    border: none;
    font-size: 24px;
    font-weight: normal;
    color: white;
    background-color: transparent;
`

export const Under = styled.img`
    width: 540px;
    height: 1px;
    margin-top: 22px;
    background-color: rgba(255, 255, 255, 0.4);
`
export const Login = styled.div`
    width: 540px;
    height: 76px;
    opacity: 0.6;
    border-radius: 38px;
    background-color: #ff1b6d;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-top: 50px;
    font-size: 26px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`

export const Loginmenu = styled.div`
    width: 402px;
    display: flex;
    justify-content: space-between;
    margin-top: 44px;
`

export const Menu = styled.div`
    font-size: 20px;
    color: white;
    cursor: pointer;
`

export const Kakao = styled.div`
    width: 540px;
    height: 76px;
    opacity: 0.6;
    border-radius: 38px;
    background-color: transparent;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-top: 61px;
    border: solid 2px #fae100;
    cursor: pointer;
`
export const Kakaologin = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #fae100;
    margin-bottom: 83px;

`

export const Error = styled.div`
    font-size: 18px;
    color: #ff1b6d;
    margin-top: 10px;
`