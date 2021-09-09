import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'

import BoardReadUI from './BoardRead.presenter';
import { FETCH_BOARD, DELETE_BOARD, CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from './BoardRead.queries';
import { useState } from 'react';

export default function BoardRead() {

    const [writer,setWriter] = useState("")
    const [password,setPassword] = useState("")
    const [contents,setContents] = useState("")

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.boardId}
    })

    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)

    const {data:commentdata} = useQuery(FETCH_BOARD_COMMENTS,{
        variables:{boardId:router.query.boardId}
    })

    async function onClickDelete() {

        await deleteBoard({
            variables: {boardId: router.query.boardId},
            // refetchQueries: [{ query: FETCH_BOARD }]
        })
        alert("삭제되었습니다.")
        router.push(`/boards/list`)

    }

    function onClickEdit() {
        router.push(`/boards/viewboard/${router.query.boardId}/edit`)
    }

    function onClickMoveToList() {
        router.push(`/boards/list`)
    }

    function onChangeCommentWriter(event) {
        setWriter(event.target.value)
    }

    function onChangeCommentPassword(event) {
        setPassword(event.target.value)
    }

    function onChangeCommentContents(event) {
        setContents(event.target.value)
    }

    async function onClickCreateComment() {
        const result = await createBoardComment({
            variables:{createBoardCommentInput:{
                writer,
                password,
                contents,
                rating:4
            },boardId:router.query.boardId},
            refetchQueries:[{query: FETCH_BOARD}]
        })
        console.log(result)
        alert("댓글등록완료")
    }

    function onClickCommentEdit() {

        updateBoardComment({
            variables: {
                updateBoardCommentInput:{
                    contents:contents,
                    rating:4
                },
                password:password,
                boardCommentId:{}
            }
        })

    }

    return(
        <BoardReadUI
            data={data}
            commentdata={commentdata}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            onClickMoveToList={onClickMoveToList}
            onChangeCommentContents={onChangeCommentContents}
            onChangeCommentPassword={onChangeCommentPassword}
            onChangeCommentWriter={onChangeCommentWriter}
            onClickCreateComment={onClickCreateComment}
            onClickCommentEdit={onClickCommentEdit}
        />
    )

}