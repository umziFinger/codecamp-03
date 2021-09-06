import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import BoardReadUI from './BoardRead.presenter';
import { FETCH_BOARD } from './BoardRead.queries';

export default function BoardRead() {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables : { boardId: router.query.boardId}
    })


    return(
        <BoardReadUI
            data={data}
        />
    )

}