import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"최권준", title:"숙제", contents:"어려워")
        {
            message
            number
        }
    }

`

export default function GraphqlApiPage(){

    const [createBoard] = useMutation(CREATE_BOARD)

    async function requestApi(){

        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return(

        <button onClick={requestApi}>GRAPHQL-API 요청하기</button>

    )

}