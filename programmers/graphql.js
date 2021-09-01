{/* <프로필 수정> */}
mutation{
    updateProfile(name:"최권준", age:22, school:"증포초등학교"){
      message
    }
  } 
  
{/* <게시판 수정> */}
  mutation{
    updateBoard(number:137, title:"이제", contents:"쉬워"){
      message
    }
  }
  
{/* <상품 수정> */}
  mutation{
      updateProduct(productId:"89c58880-7c60-46e0-9a78-c7c413a67575", updateProductInput: {
      name:"이클립스",
      detail:"4개먹음",
      price: 50500
    }){
      message
    }
  }
  
{/* <상품 조회> */}
  query{
    fetchProduct(productId:"89c58880-7c60-46e0-9a78-c7c413a67575"){
      price
    }
  }
  
{/* <상품 삭제> */}
  mutation{
    deleteProduct(productId:"89c58880-7c60-46e0-9a78-c7c413a67575"){
      message
    }
  }
  
{/* <전체 게시판 조회> */}
  query{
    fetchBoards{
      number
      writer
      title
      contents
      like
    }
  }
  
{/* <프로필 개수 조회> */}
  query{
    fetchProfilesCount
  }


{/* <게시판 생성> */}
mutation {
    createBoard(createBoardInput:{
      writer: "1", 
      password:"12"
      title:"이게뭐람",
      contents:"뭐람뭐람"}
    ){_id}
  }
  
{/* <특정 게시판 조회> */}
  query{
    fetchBoard(boardId:"612f23b4abd89b00293add2c"){
      title
      contents
    }
  }
  
{/* <게시물 좋아요> */}
  mutation{
    likeBoard(boardId:"612f23b4abd89b00293add2c")
  }
  
{/* <게시물 싫어요> */}
  mutation{
    dislikeBoard(boardId:"612f23b4abd89b00293add2c")
  }
  
{/* <게시물 좋아요,싫어요 개수 조회> */}
  query{
     fetchBoard(boardId:"612f23b4abd89b00293add2c"){
      likeCount
      dislikeCount
    }
  }

{/* <전체 개시판 개수 조회> */}
  query {
    fetchBoardsCount
  }

{/* <게시판 수정> */}
  mutation{
    updateBoard(updateBoardInput:{title:"aaa", contents:"뭐람뭐람"},password:"1234",boardId:"612f23b4abd89b00293add2c"){
      }
  }

{/* <Search를 이용한 게시판 조회> */}
  query {
    fetchBoards(search:"이게뭐람"){
      writer
      title
      contents
    }
  }

{/* <게시판 댓글 생성> */}
  mutation{
    createBoardComment(createBoardCommentInput:{
      writer:"me",
      password:"1234",
      contents:"1111",
      rating:5
    },boardId:"612f23b4abd89b00293add2c"){
      contents
      _id
    }
  }

{/* <게시판 댓글 수정> */}
  mutation{
    updateBoardComment(updateBoardCommentInput:{contents:"1233",rating:5},password:"1234",boardCommentId:"612f2bb0abd89b00293add5b"){contents}
  }

{/* <게시판 댓글 삭제> */}
  mutation{
    deleteBoardComment(password:"1234",boardCommentId:"612f2bb0abd89b00293add5b")
  }

{/* <Best 게시판 조회> */}
  query{
    fetchBoardsOfTheBest{
      writer
      title
      _id
    }
  }

{/* <사용자 생성> */}
  mutation{
    createUser(createUserInput:{
      email:"aavvaav@asdfasdf",
      password: "1234",
      name:"최권준"
    }){
      email
      name
      _id
    }
  }