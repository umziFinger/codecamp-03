import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'

import BoardReadUI from './BoardRead.presenter';
import { FETCH_BOARD, DELETE_BOARD } from './BoardRead.queries';

export default function BoardRead() {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.boardId}
    })

    const [deleteBoard] = useMutation(DELETE_BOARD)

    async function onClickDelete() {

        await deleteBoard({
            variables: {boardId: router.query.boardId},
            refetchQueries: [{ query: FETCH_BOARD }]
        })
        alert("삭제되었습니다.")

    }

    // async function onClickDelete() {

    //     const passwordInput = prompt("비밀번호 입력")

    //     if(passwordInput == ){
    //         await deleteBoard({
    //                 variables: {boardId: router.query.boardId},
    //                 refetchQueries: [{ query: FETCH_BOARD }]
    //         })
    //         alert("삭제되었습니다.")
        
    //     }else{
    //         alert("error")
    //     }

    // }

    return(
        <BoardReadUI
            data={data}
            onClickDelete={onClickDelete}
        />
    )

}