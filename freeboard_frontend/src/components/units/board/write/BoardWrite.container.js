import {useState} from 'react'

import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.presenter';

import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'

export default function BoardWrite(props) {

    const router = useRouter()

    const [buttonColor, setButtonColor] = useState(false)

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentError, setContentError] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD) //mutation을 사용하기 위한 변수(createBoard)와 위에서 할당한 createBoard를 CREATE_BOARD로 불러옴
    const [updateBoard] = useMutation(UPDATE_BOARD)

    // async function requestApi(){

    //     const result = await createBoard({
    //         variables: {
    //             createBoardInput: {
    //                 writer:name,
    //                 password:password,
    //                 title:title,
    //                 contents:content
    //             }
    //         }
    //     })
    //     console.log(result.data.createBoard._id)

    // }


    function onChangeName(event) {
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("")
        }
        if(event.target.value !== "" && password !== "" && title !== "" && content !== ""){
            setButtonColor(true)
        }
        else{
            setButtonColor(false)
        }
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError("")
        }
        if(name !== "" && event.target.value !== "" && title !== "" && content !== ""){
            setButtonColor(true)
        }
        else{
            setButtonColor(false)
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("")
        }
        if(name !== "" && password !== "" && event.target.value !== "" && content !== ""){
            setButtonColor(true)
        }
        else{
            setButtonColor(false)
        }
    }

    function onChangeContent(event) {
        setContent(event.target.value)
        if(event.target.value !== ""){
            setContentError("")
        }
        if(name !== "" && password !== "" && title !== "" && event.target.value !== ""){
            setButtonColor(true)
        }
        else{
            setButtonColor(false)
        }
    }

    async function check() {

        if(props.isEdit){

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

            if(name !== "" && password !== "" && title !== "" && content !== ""){
                
                try{

                    const myVariables = {
                        updateBoardInput:{
                        },boardId:router.query.boardId
                    }
                    if(title) myVariables.updateBoardInput.title = title
                    if(content) myVariables.updateBoardInput.contents = content
                    if(password) myVariables.password = password

                    await updateBoard({
                        variables:myVariables
                    })
                    router.push(`/boards/viewboard/${router.query.boardId}`)
                    alert("수정이 완료되었습니다.")
                }catch(err){
                    alert(err.message)
                }
            }    
        }
        else{


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

            try{
                if(name !== "" && password !== "" && title !== "" && content !== ""){

                    const result = await createBoard({
                        variables: {
                            createBoardInput: {
                                writer:name,
                                password:password,
                                title:title,
                                contents:content  // key와 value가 같으면 생략가능 ex) writer: writer, >>> writer,
                            } 
                        }
                    })


                    console.log(result.data.createBoard._id)
                    router.push(`/boards/viewboard/${result.data.createBoard._id}`)
                    alert("등록이 완료되었습니다!")
                } 
            }catch(error){
                console.log("error")
            }    
        }
    }

    function onClickCancle() {
        router.push(`/boards/viewboard/${router.query.boardId}`)
    }

    function onClickEditSubmit() {


    }

    return(
        <BoardWriteUI
            onChangeName={onChangeName}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            nameError={nameError}
            passwordError={passwordError}
            titleError={titleError}
            contentError={contentError}
            check={check}
            buttonColor={buttonColor}
            isEdit={props.isEdit}
            onClickCancle={onClickCancle}
            onClickEditSubmit={onClickEditSubmit}
            data={props.data}
        />
    )

}