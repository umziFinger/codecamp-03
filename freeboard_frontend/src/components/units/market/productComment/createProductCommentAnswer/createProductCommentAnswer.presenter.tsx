import {
  CommentButton,
  CommentContents,
  CommentIcon,
  CommentLengthCheckBox,
  CommentTitle,
  CommentWrapper,
  ContentsInputBox,
  Line,
  Wrapper,
} from "./createProductCommentAnswer.styles";

export default function ProductCommentAnswerUI(props) {
  return (
    <Wrapper>
      <CommentWrapper>
        <ContentsInputBox>
          <CommentContents
            type="text"
            placeholder="답글을 입력해주세요."
            // defaultValue={props.el?.contents}
            onChange={props.onChangeAnswer}
          />
          <CommentLengthCheckBox>
            <div>100</div>
            <CommentButton onClick={props.onClickAnswer}>
              답글등록
            </CommentButton>
          </CommentLengthCheckBox>
        </ContentsInputBox>
      </CommentWrapper>
    </Wrapper>
  );
}
