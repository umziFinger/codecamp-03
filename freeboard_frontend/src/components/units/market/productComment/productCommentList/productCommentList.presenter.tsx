import ProductCommentAnswer from "../createProductCommentAnswer/createProductCommentAnswer.container";
import ProductCommentAnswerList from "../ProductCommentAnswerList/ProductCommentAnswerList.container";
import ProductCommentWrite from "../productCommentWrite/productCommentWrite.container";
import {
  CommentDeleteButton,
  CommentEditButton,
  CommentMap,
  CommentProfileImage,
  CommentProfileImageBox,
  EditBox,
  MapBox,
  MapContents,
  MapDate,
  MapRating,
  MapWriter,
  MapWriteRating,
  Row,
  Wrapper,
} from "./productCommentList.styles";

export default function ProductCommentListUI(props) {
  return (
    <>
      {!props.isEdit ? (
        <Wrapper>
          <CommentMap>
            <Row>
              <CommentProfileImageBox>
                <CommentProfileImage src="/images/profile.png" />
              </CommentProfileImageBox>
              <MapBox>
                <MapWriteRating>
                  <MapWriter>{props.el.user.name}</MapWriter>
                </MapWriteRating>
                <MapContents>{props.el.contents}</MapContents>
              </MapBox>

              <EditBox>
                <CommentEditButton
                  src="/images/edit.png"
                  onClick={props.onClickEdit}
                />
                <CommentDeleteButton
                  id={props.el._id}
                  src="/images/delete.png"
                  onClick={props.onClickDelete}
                />
                <div id={props.el._id} onClick={props.onClickAnswer}>
                  answer
                </div>
              </EditBox>
            </Row>
            <MapDate>2020.20.20</MapDate>
          </CommentMap>
        </Wrapper>
      ) : (
        <ProductCommentWrite
          isEdit={props.isEdit}
          el={props.el}
          setIsEdit={props.setIsEdit}
        />
      )}

      {props.answersData?.fetchUseditemQuestionAnswers.map((el) => (
        <ProductCommentAnswerList el={el} el2={props.el} />
      ))}

      {props.isAnswer && (
        <ProductCommentAnswer el={props.el} setIsAnswer={props.setIsAnswer} />
      )}
    </>
  );
}
