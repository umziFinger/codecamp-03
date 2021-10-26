import ProductCommentAnswer from "../createProductCommentAnswer/createProductCommentAnswer.container";
import {
  CommentDeleteButton,
  CommentEditButton,
  CommentMap,
  CommentProfileImage,
  CommentProfileImageBox,
  EditBox,
  MapBox,
  MapContents,
  MapWriter,
  MapWriteRating,
  Row,
  Wrapper,
} from "./ProductCommentAnswerList.styles";

export default function ProductCommentAnswerListUI(props: any) {
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
                  <MapWriter>판매자</MapWriter>
                </MapWriteRating>
                <MapContents>{props.el.contents}</MapContents>
              </MapBox>

              <EditBox>
                <CommentEditButton
                  id={props.el._id}
                  src="/images/edit.png"
                  onClick={props.onClickEdit}
                />
                <CommentDeleteButton
                  id={props.el._id}
                  src="/images/delete.png"
                  onClick={props.onClickDelete}
                />
                <div>
                  <img src="/images/answer.png" />
                </div>
              </EditBox>
            </Row>
          </CommentMap>
        </Wrapper>
      ) : (
        <ProductCommentAnswer
          isEdit={props.isEdit}
          el={props.el}
          el2={props.el2}
          setIsEdit={props.setIsEdit}
        />
      )}
    </>
  );
}
