import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../productCommentList/productCommentList.queries";
import ProductCommentAnswerListUI from "./ProductCommentAnswerList.presenter";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ProductCommentAnswerList.queries";

export default function ProductCommentAnswerList(props) {
  const [isEdit, setIsEdit] = useState(false);

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  async function onClickEdit() {
    setIsEdit((prev) => !prev);
  }

  async function onClickDelete(event) {
    await deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el2._id },
        },
      ],
    });
    alert("답변삭제완료");
  }

  return (
    <ProductCommentAnswerListUI
      el={props.el}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      onClickDelete={onClickDelete}
      el2={props.el2}
    />
  );
}
