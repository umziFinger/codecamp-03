import { FETCH_BOARDS } from './ListRead.queries'
import ListReadUI from './ListRead.presenter'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

export default function ListRead() {

    const {data} = useQuery(FETCH_BOARDS)

    const router = useRouter()

    function moveToRead(event) {
        router.push(`/boards/viewboard/${event.target.id}`)
    }

    function moveToNew() {
        router.push(`/boards/new`)
    }

    return(
        <ListReadUI
            data={data}
            moveToRead={moveToRead}
            moveToNew={moveToNew}
        />
    )
}