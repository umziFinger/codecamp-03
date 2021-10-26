import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { UPDATE_USED_ITEM_QUESTION_ANSWER } from "../ProductCommentAnswerList/ProductCommentAnswerList.queries";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../productCommentList/productCommentList.queries";
import ProductCommentAnswerUI from "./createProductCommentAnswer.presenter";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./createProductCommentAnswer.queries";

export default function ProductCommentAnswer(props: any) {
  const [contents, setContents] = useState("");
  const [createUseditemQuestionAnswers] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS);

  function onChangeAnswer(event: any) {
    setContents(event.target.value);
  }

  async function onClickAnswer() {
    console.log(props.el._id);
    const result = await createUseditemQuestionAnswers({
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

  async function onClickAnswerEdit() {
    console.log(props.el2._id);
    await updateUseditemQuestionAnswer({
      variables: {
        updateUseditemQuestionAnswerInput: { contents },
        useditemQuestionAnswerId: props.el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el2._id },
        },
      ],
    });
    props.setIsEdit((prev: any) => !prev);
  }

  return (
    <ProductCommentAnswerUI
      onChangeAnswer={onChangeAnswer}
      onClickAnswer={onClickAnswer}
      isEdit={props.isEdit}
      el2={props.el2}
      onClickAnswerEdit={onClickAnswerEdit}
    />
  );
}
