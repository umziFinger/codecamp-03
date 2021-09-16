import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./ListRead.queries";
import ListReadUI from "./ListRead.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ListRead() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: boardsCountData } = useQuery(FETCH_BOARDS_COUNT);

  const pageCount = Math.ceil(boardsCountData?.fetchBoardsCount / 10);
  const router = useRouter();

  function moveToRead(event) {
    router.push(`/boards/viewboard/${event.currentTarget.id}`);
  }

  function moveToNew() {
    router.push(`/boards/new`);
  }

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > pageCount) return;
    setStartPage((prev) => prev + 10);
  }

  return (
    <ListReadUI
      data={data}
      moveToRead={moveToRead}
      moveToNew={moveToNew}
      startPage={startPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      pageCount={pageCount}
    />
  );
}
