import axios from "axios";

export default function GraphqlRestPage() {
  const onClickRequest = async () => {
    const result = await axios.post(
      "https://backend03.codebootcamp.co.kr/graphql",
      {
        query: `
                mutation createBoard{
                    createBoard(createBoardInput:{
                        writer: "처처처처처쥑이네",
                        password: "1234",
                        title: "제목"
                        contents: "직이네"
                    }){
                        _id
                        writer
                    }
                }
            `,
      }
    );
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickRequest}>
        클릭해서 Graphql을 Axios로 요청하기
      </button>
    </>
  );
}
