import {
    Mybutton,
    Title
} from './BoardWrite.styled'

export default function BoardWirteUI(props){

    return (

        <>
            <Title zzz={props.zzz}>컨테이너 프리젠터 패턴</Title>
            작성자: <input type="text" onChange={props.onChangeMyWriter} /><br />
            제목: <input type="text" onChange={props.onChangeMyTitle} /><br />
            내용: <input type="text" onChange={props.onChangeMycontents} /><br />
            <Mybutton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기</Mybutton>
        </>
    )

}