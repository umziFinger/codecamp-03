import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const FETCH_BOARDS = gql`
  query ($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 150px;
`;

const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;

interface IProps {
  isMatched: boolean;
}

const MyWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchKeywordPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  function onChangeSearch(event) {
    setMySearch(event.target.value);
  }

  function onClickSearch() {
    refetch({
      search: mySearch,
      //   page: 1, // 기본적으로 page를 지정하지 않으면 1페이지로 이동 // 회사마다 다를 수 있으니 확인 후 사용
    });
    setMyKeyword(mySearch);
  }

  function onClickPage(event) {
    refetch({
      search: myKeyword,
      page: Number(event.target.id),
    });
  }

  return (
    <>
      <div>검색페이지</div>
      검색어: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>search</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              .replaceAll(myKeyword, `$${myKeyword}$`)
              .split("$")
              .map((el) => (
                <MyWord key={uuid} isMatched={myKeyword === el}>
                  {el}
                </MyWord>
              ))}
          </Column>
          <Column>{el.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuid} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
