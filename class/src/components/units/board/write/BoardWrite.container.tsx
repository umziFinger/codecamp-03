import BoardWriteUI from'./BoardWrite.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import {useRouter} from 'next/router'

export default function BoardWrite(props){

    const router = useRouter()

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const [zzz, setZzz] = useState(true)
    const [qqq, setQqq] = useState(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")


    // myWriter, myTitle, myContents모두 내용이 저장되어 있다면,
    // 즉, (myWriter !== "" && myTitle !== "" && myContents !== "") 라면
    // setQqq를 이용해 false=>true, 버튼색 바꾸기

    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
        if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setQqq(true)
        }
        else{
            setQqq(false)
        }
    }

    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
        if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setQqq(true)
        }
        else{
            setQqq(false)
        }
    }

    function onChangeMycontents(event) {
        setMyContents(event.target.value)
        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setQqq(true)
        }
        else{
            setQqq(false)
        }
    }

    async function aaa() {

        try{

            const result = await createBoard({
                variables: { writer: myWriter, title: myTitle, contents: myContents }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number)  옛날방식
            router.push(`/08-04-board-detail/${result.data.createBoard.number}`) // 최신방식 템플릿 리터럴
            alert("완료")

        } catch(error){

            console.log(error)

        }

    }

    async function bbb() {

        try{
            //1. state의 초기값에도 defaultValue를 넣어주는 방법
            //2. 실제로 변경이 일어난 값만 수정하라고 Backend에 요청

            const myVariables = {
                number: Number(router.query.number)
            }
            if(myWriter) myVariables.writer = myWriter
            if(myTitle) myVariables.title = myTitle
            if(myContents) myVariables.contents = myContents

            const result = await updateBoard({
                variables: myVariables
            })
            console.log(result)
            console.log(result.data.updateBoard.number)
            // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number)  옛날방식
            router.push(`/08-04-board-detail/${result.data.updateBoard.number}`) // 최신방식 템플릿 리터럴
            alert("수정완료")

        } catch(error){

            console.log(error)

        }

    }

    return (
        <BoardWriteUI 
            onChangeMyWriter={onChangeMyWriter}
            onChangeMyTitle={onChangeMyTitle}
            onChangeMycontents={onChangeMycontents}
            aaa={aaa}
            bbb={bbb}
            zzz={zzz}
            qqq={qqq}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}