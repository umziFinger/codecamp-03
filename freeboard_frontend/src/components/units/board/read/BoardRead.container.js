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
        router.push(`/boards/list`)

    }

    function onClickEdit() {
        router.push(`/boards/viewboard/${router.query.boardId}/edit`)
    }

    function onClickMoveToList() {
        router.push(`/boards/list`)
    }

    return(
        <BoardReadUI
            data={data}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            onClickMoveToList={onClickMoveToList}
        />
    )

}