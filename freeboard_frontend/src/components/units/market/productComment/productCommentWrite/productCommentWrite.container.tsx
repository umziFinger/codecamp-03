import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCommentWriteUI from "./productCommentWrite.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./productCommentWrite.queries";

export default function ProductCommentWrite() {
  const [contents, setContents] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

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
    });
  }

  return (
    <ProductCommentWriteUI
      onChangeCommentContents={onChangeCommentContents}
      onClickQuestion={onClickQuestion}
      inputRef={inputRef}
    />
  );
}
