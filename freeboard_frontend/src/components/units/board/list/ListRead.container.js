import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./ListRead.queries";
import ListReadUI from "./ListRead.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import _ from "lodash";

export default function ListRead() {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: boardsCountData } = useQuery(FETCH_BOARDS_COUNT);
  const { data: bestBoardData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const pageCount = Math.ceil(boardsCountData?.fetchBoardsCount / 10);
  const router = useRouter();

  function moveToRead(event) {
    router.push(`/boards/viewboard/${event.currentTarget.id}`);
  }

  function moveToNew() {
    router.push(`/boards/new`);
  }

  function onClickRegion(event) {
    refetch({
      page: 1,
      search: String(event.target.id),
    });
    setCurrentPage(Number(event.target.id));
  }

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
      search: keyword,
    });
    setCurrentPage(Number(event.target.id));
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > pageCount) return;
    setStartPage((prev) => prev + 10);
  }

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setKeyword(data);
    setCurrentPage(1);
  }, 500);

  function onChangeSearch(event) {
    getDebounce(event.target.value);
    // setSearch(event.target.value);
  }

  function onClickSearch() {
    // refetch({ search: search, page: 1 });
    // setCurrentPage(1);
    // setKeyword(search);
  }

  function onClickBestBoard(event) {
    router.push(`/boards/viewboard/${event.currentTarget.id}`);
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
      currentPage={currentPage}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      keyword={keyword}
      bestBoardData={bestBoardData}
      onClickBestBoard={onClickBestBoard}
      onClickRegion={onClickRegion}
    />
  );
}
