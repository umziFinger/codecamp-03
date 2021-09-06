import { Contents, Name, Number, Title, Title2 } from './BoardRead.styled'

export default function BoardReadUI(props) {

    return(
        <>
            <Title>게시물 상세 페이지입니다.</Title>
            <Number>게시글 번호: {props.router.query.number}</Number>
           
            <Name>게시글 작성자: {props.data ? props.data.fetchBoard.writer: "loading.."}</Name> 
            <Title2>게시글 제목: {props.data ? props.data.fetchBoard.title : "loading.."}</Title2>
            <Contents>게시글 내용: {props.data ? props.data.fetchBoard.contents: "loading.."}</Contents> 
            
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