import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../productCommentList/productCommentList.queries";
import ProductCommentAnswerUI from "./createProductCommentAnswer.presenter";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./createProductCommentAnswer.queries";

export default function ProductCommentAnswer(props) {
  const [contents, setContents] = useState("");
  const [createUseditemQuestionAnswers] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS);

  function onChangeAnswer(event) {
    setContents(event.target.value);
  }

  function onClickAnswer() {
    console.log(props.el._id);
    createUseditemQuestionAnswers({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents,
        },
        useditemQuestionId: props.el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el._id },
        },
      ],
    });
    props.setIsAnswer(false);
  }

  return (
    <ProductCommentAnswerUI
      onChangeAnswer={onChangeAnswer}
      onClickAnswer={onClickAnswer}
    />
  );
}
