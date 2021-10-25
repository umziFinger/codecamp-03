import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCommentWriteUI from "./productCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./productCommentWrite.queries";

export default function ProductCommentWrite(props) {
  const [contents, setContents] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  // useEffect(()=> {
  //   inputRef.current?.
  // },[])

  function onChangeCommentContents(event) {
    setContents(event.target.value);
  }

  function onClickQuestion() {
    createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: router.query.useditemId,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    setContents("");
  }

  function onClickQuestionEdit(event) {
    // useEffect(() => {
    //   setContents(props.el.contents);
    // });

    updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents,
        },
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    props.setIsEdit(false);
  }

  return (
    <ProductCommentWriteUI
      onChangeCommentContents={onChangeCommentContents}
      onClickQuestion={onClickQuestion}
      inputRef={inputRef}
      isEdit={props.isEdit}
      el={props.el}
      onClickQuestionEdit={onClickQuestionEdit}
      contents={contents}
    />
  );
}
