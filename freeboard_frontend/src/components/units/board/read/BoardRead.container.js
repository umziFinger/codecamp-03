import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";

import BoardReadUI from "./BoardRead.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardRead.queries";
import { useState } from "react";

export default function BoardRead() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const [isAddress, setIsAddress] = useState(false);

  const [imageNumber, setImageNumber] = useState(0);

  async function onClickDelete() {
    await deleteBoard({
      variables: { boardId: router.query.boardId },
      // refetchQueries: [{ query: FETCH_BOARD }]
    });
    alert("삭제되었습니다.");
    router.push(`/boards/list`);
  }

  function onClickEdit() {
    router.push(`/boards/viewboard/${router.query.boardId}/edit`);
  }

  function onClickMoveToList() {
    router.push(`/boards/list`);
  }

  function onClickLikeUp() {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  }

  function onClickDisLikeUp() {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  }

  function onClickAddressVisible() {
    setIsAddress((prev) => !prev);
  }

  function onClickImageChange() {
    if (imageNumber === data.fetchBoard.images.length - 1) return;
    setImageNumber((prev) => prev + 1);
  }

  console.log(data?.fetchBoard.images);
  return (
    <BoardReadUI
      data={data}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickMoveToList={onClickMoveToList}
      onClickLikeUp={onClickLikeUp}
      onClickDisLikeUp={onClickDisLikeUp}
      onClickAddressVisible={onClickAddressVisible}
      isAddress={isAddress}
      onClickImageChange={onClickImageChange}
      imageNumber={imageNumber}
    />
  );
}
