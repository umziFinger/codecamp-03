import CommentWriteUI from "./commentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function CommentWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
    setRating(value);
  };

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeCommentWriter(event) {
    setWriter(event.target.value);
  }

  function onChangeCommentPassword(event) {
    setPassword(event.target.value);
  }

  function onChangeCommentContents(event) {
    setContents(event.target.value);
  }

  async function onClickCreateComment() {
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating,
        },
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    console.log(result);
    alert("댓글등록완료");
  }

  async function onClickEditComment(event) {
    const result = await updateBoardComment({
      variables: {
        updateBoardCommentInput: { contents: contents, rating },
        password,
        boardCommentId: String(event.target.id),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    alert("댓글 수정완료");
    {
      props.setIsEdit(false);
    }
    console.log(result);
  }

  return (
    <CommentWriteUI
      el={props.el}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentWriter={onChangeCommentWriter}
      onClickCreateComment={onClickCreateComment}
      data={data}
      comment={props.commentdata}
      isEdit={props.isEdit}
      onClickEditComment={onClickEditComment}
      handleChange={handleChange}
      value={value}
    />
  );
}
