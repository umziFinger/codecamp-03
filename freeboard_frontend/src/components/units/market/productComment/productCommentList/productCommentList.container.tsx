import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCommentListUI from "./productCommentList.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./productCommentList.queries";

export default function ProductCommentList(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);
  const { data: answersData } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });

  console.log(answersData);
  function onClickEdit() {
    setIsEdit(true);
  }

  function onClickDelete(event) {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  }

  function onClickAnswer() {
    setIsAnswer(true);
  }

  return (
    <ProductCommentListUI
      el={props.el}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      onClickDelete={onClickDelete}
      onClickAnswer={onClickAnswer}
      isAnswer={isAnswer}
      setIsAnswer={setIsAnswer}
      answersData={answersData}
    />
  );
}
