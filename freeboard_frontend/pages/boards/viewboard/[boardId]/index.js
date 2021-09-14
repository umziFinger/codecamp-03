import BoardRead from "../../../../src/components/units/board/read/BoardRead.container";
import CommentWrite from "../../../../src/components/units/board/comment/write/commentWrite.container";
import CommentRead from "../../../../src/components/units/board/comment/read/commentRead.container";
import { FETCH_BOARD_COMMENTS } from "../../../../src/components/units/board/comment/read/commentRead.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function ViewBoardPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <BoardRead />
      <CommentWrite />
      {data?.fetchBoardComments.map((el) => (
        <CommentRead key={el._id} data={data} el={el} />
      ))}
    </>
  );
}
