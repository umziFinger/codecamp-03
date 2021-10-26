import {
  CommentWrapper,
  ContentsInputBox,
  CommentButton,
  CommentContents,
  CommentLengthCheckBox,
  CommentTitle,
  CommentIcon,
  CommentTop,
  Wrapper,
  Line,
} from "./productCommentWrite.styles";

export default function ProductCommentWriteUI(props: any) {
  return (
    <Wrapper>
      <Line></Line>
      <CommentWrapper>
        <CommentTitle>
          {!props.isEdit && (
            <>
              <CommentIcon src="/images/comment.png" />
              <div>문의하기</div>
            </>
          )}
          {props.isEdit && <div>{props.el.user.name}</div>}
        </CommentTitle>
        {/*댓글작성*/}
        <ContentsInputBox>
          <CommentContents
            value={props.contents}
            ref={props.inputRef}
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고, 불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.el?.contents}
            onChange={props.onChangeCommentContents}
          />
          <CommentLengthCheckBox>
            <div>100</div>
            {!props.isEdit ? (
              <CommentButton onClick={props.onClickQuestion}>
                문의하기
              </CommentButton>
            ) : (
              <CommentButton
                id={props.el._id}
                onClick={props.onClickQuestionEdit}
              >
                수정하기
              </CommentButton>
            )}
          </CommentLengthCheckBox>
        </ContentsInputBox>
      </CommentWrapper>
    </Wrapper>
  );
}
