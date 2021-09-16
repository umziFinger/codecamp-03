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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
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

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }
  return (
    <>
      <div>페이지네이션(마지막페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <Page
              id={String(startPage + index)}
              key={startPage + index}
              onClick={onClickPage}
            >
              {startPage + index}
            </Page>
          )
      )}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
