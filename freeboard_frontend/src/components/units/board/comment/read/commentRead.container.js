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
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [commentId, setCommentId] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data: commentdata } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  function onChangeInputPassword(event) {
    setInputPassword(event.target.value);
  }

  async function onClickCommentDelete(event) {
    setModalVisible(true);
    setCommentId(event.target.id);
  }

  function closeModal() {
    setModalVisible((prev) => !prev);
  }

  async function onClickOk() {
    try {
      await deleteBoardComment({
        variables: {
          password: String(inputPassword),
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      console.log(commentId);
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
      isOpen={isOpen}
      modalVisible={modalVisible}
      onChangeInputPassword={onChangeInputPassword}
      closeModal={closeModal}
      onClickOk={onClickOk}
    />
  );
}
