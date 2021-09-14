import { Rate } from "antd";
import { useState } from "react";

import {
  CommentWrapper,
  ContentsInputBox,
  CommentButton,
  CommentContents,
  CommentLengthCheckBox,
  CommentTitle,
  CommentIcon,
  CommentTop,
  CommentWriter,
  CommentPassword,
} from "./commentWrite.styled";

export default function CommentWriteUI(props) {
  return (
    <CommentWrapper>
      <div>
        {!props.isEdit && (
          <CommentTitle>
            <CommentIcon src="/images/comment.png" />
            댓글
          </CommentTitle>
        )}
        <div>
          {/*댓글작성*/}
          <CommentTop>
            <CommentWriter
              type="text"
              placeholder="작성자"
              defaultValue={props.el?.writer}
              onChange={props.onChangeCommentWriter}
            />
            <CommentPassword
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangeCommentPassword}
            />
            <div>
              <span>
                <Rate onChange={props.handleChange} value={props.value} />
              </span>
            </div>
          </CommentTop>
          <ContentsInputBox>
            <CommentContents
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고, 불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              defaultValue={props.el?.contents}
              onChange={props.onChangeCommentContents}
            />
            <CommentLengthCheckBox>
              <div>{props.contentsLength}/100</div>
              {!props.isEdit && (
                <CommentButton onClick={props.onClickCreateComment}>
                  등록하기
                </CommentButton>
              )}
              {props.isEdit && (
                <CommentButton
                  id={props.el?._id}
                  onClick={props.onClickEditComment}
                >
                  수정하기
                </CommentButton>
              )}
            </CommentLengthCheckBox>
          </ContentsInputBox>
        </div>
      </div>
    </CommentWrapper>
  );
}
