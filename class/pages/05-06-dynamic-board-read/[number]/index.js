import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function DynamicBoardReadPage(){

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    })

    return(
        <>
            <div>게시물 상세 페이지입니다.</div>
            <div>게시글 번호: {router.query.number}</div>
           
            <div>게시글 작성자: {data ? data.fetchBoard.writer: "loading.."}</div> 
            <div>게시글 제목: {data ? data.fetchBoard.title : "loading.."}</div>
            <div>게시글 내용: {data ? data.fetchBoard.contents: "loading.."}</div> 
            
            {/* //*optional chaining  */}
           
            {/* <div>게시글 작성자: {data && data.fetchBoard.writer}</div> 
            <div>게시글 제목: {data && data.fetchBoard.title}</div>
            <div>게시글 내용: {data && data.fetchBoard.contents}</div> */}

            {/* //* 조건부 랜더링: data && data.~~~ 데이터가 있으면 실행 없으면 실행 X  */}

            {/* <div>게시글 작성자: {data ? data.fetchBoard.writer : "loading..."}</div> 
            <div>게시글 제목: {data ? data.fetchBoard.title : "loading..."}</div>
            <div>게시글 내용: {data ? data.fetchBoard.contents : "loading..."}</div> */}

            {/* //* data?data.~~: 데이터받기 이전에 default값을 줄 수 있음  */}
        </>          
    )

}