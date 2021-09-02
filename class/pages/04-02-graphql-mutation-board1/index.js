import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"영희", title:"안녕하세요", contents:"!!!"){
            message
            number
        }
    }
`

export default function GraphqlMutationBoard1Page (){

    const [createBoard] = useMutation(CREATE_BOARD)

    async function aaa() {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.number)
    }

    return(

        <button onClick={aaa}>GRAPHQL-API 요청하기</button>

    )

}