import { FETCH_BOARDS } from './ListRead.queries'
import ListReadUI from './ListRead.presenter'
import {useQuery} from '@apollo/client'

export default function ListRead() {

    const {data} = useQuery(FETCH_BOARDS)



    return(
        <ListReadUI
            data={data}

        />
    )
}