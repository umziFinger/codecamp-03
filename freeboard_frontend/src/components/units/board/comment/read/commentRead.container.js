import CommentReadUI from "./commentRead.presenter";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./commentRead.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export default function CommentRead(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data: commentdata } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  async function onClickCommentDelete(event) {
    const commentPasswordInput = prompt("비밀번호를 입력해주세요.");

    try {
      await deleteBoardComment({
        variables: {
          password: String(commentPasswordInput),
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      console.log(event.target.id);
    } catch (err) {
      alert(err);
    }
  }

  function onClickCommentEdit() {
    setIsEdit(true);
  }

  return (
    <CommentReadUI
      onClickCommentEdit={onClickCommentEdit}
      onClickCommentDelete={onClickCommentDelete}
      commentdata={commentdata}
      isEdit={isEdit}
      el={props.el}
      setIsEdit={setIsEdit}
    />
  );
}
