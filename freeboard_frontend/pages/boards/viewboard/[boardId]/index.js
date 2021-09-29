import BoardRead from "../../../../src/components/units/board/read/BoardRead.container";
import CommentWrite from "../../../../src/components/units/board/comment/write/commentWrite.container";
import CommentRead from "../../../../src/components/units/board/comment/read/commentRead.container";
import { FETCH_BOARD_COMMENTS } from "../../../../src/components/units/board/comment/read/commentRead.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";

export default function ViewBoardPage() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { page: 1, boardId: router.query.boardId },
  });

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  }

  return (
    <>
      <BoardRead />
      <CommentWrite />
      {data?.fetchBoardComments.map((el) => (
        <CommentRead key={el._id} data={data} el={el} />
      ))}
      {/* <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoardComments.map((el) => (
          <CommentRead key={el._id} data={data} el={el} />
        ))}
      </InfiniteScroll> */}
    </>
  );
}
