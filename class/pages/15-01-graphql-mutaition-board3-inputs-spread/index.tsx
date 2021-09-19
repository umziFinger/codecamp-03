import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;
// 04-04-gaphql-mutaion-board3 과 비교함녀서 학습하기!!!
export default function GraphqlMutaionBoard3Page() {
  const [creatBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contens: "",
  });
  // const [myWriter, setMyWriter] = useState(‘’)
  // const [myTitle, setMyTitle] = useState(‘’)
  // const [myContents, setMyContents] = useState(‘’)
  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
      // wirter: myInputs.writer
      // title: myInputs.title
      // contents: myInputs.contents
      // writer: “철수”
    });
  }
  //   function onChangeMyWriter(event) {
  //     setMyWriter(event.target.value);
  //   }
  //   function onChangeMyTtitle(event) {
  //     setMyTitle(event.target.value);
  //   }
  //   function onChangeMyContents(event) {
  //     setMyContents(event.target.value);
  //   }
  async function aaa() {
    const result = await creatBoard({
      variables: { ...myInputs },
      //   variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    console.log(result.data.creatBoard);
  }
  return (
    <>
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={aaa}>GRAPQL-API 요청하기!!!</button>
    </>
  );
}