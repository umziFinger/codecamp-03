import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      createdAt
      _id
    }
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function PaginationNextPagePage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
  }

  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }

  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }
  return (
    <>
      <div>페이지네이션(다음페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      {new Array(10).fill(1).map((_, index) => (
        <Page
          id={String(startPage + index)}
          key={startPage + index}
          onClick={onClickPage}
        >
          {startPage + index}
        </Page>
      ))}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <Page
          id={String(startPage + index)}
          key={startPage + index}
          onClick={onClickPage}
        >
          {startPage + index}
        </Page>
      ))} */}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
