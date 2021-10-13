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

export default function ProductCommentAnswerListUI(props) {
  return (
    <>
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
                src="/images/edit.png"
                // onClick={props.onClickEdit}
              />
              <CommentDeleteButton
                // id={props.el._id}
                src="/images/delete.png"
                // onClick={props.onClickDelete}
              />
              <div>answer</div>
            </EditBox>
          </Row>
        </CommentMap>
      </Wrapper>
    </>
  );
}
