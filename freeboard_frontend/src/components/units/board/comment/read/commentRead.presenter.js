import { Rate } from "antd";
import CommentWrite from "../write/commentWrite.container";
import { Modal } from "antd";
import {
  CommentMap,
  Row,
  CommentProfileImageBox,
  CommentProfileImage,
  MapBox,
  MapWriteRating,
  MapWriter,
  MapRating,
  MapContents,
  EditBox,
  CommentEditButton,
  CommentDeleteButton,
  MapDate,
  Wrapper,
} from "./commentRead.styled";
import { Global } from "@emotion/react";

export default function CommentReadUI(props) {
  return (
    <Wrapper>
      <Modal
        visible={props.modalVisible}
        onCancel={props.closeModal}
        onOk={props.onClickOk}
      >
        비밀번호 입력:
        <input type="password" onChange={props.onChangeInputPassword} />
      </Modal>
      {!props.isEdit && (
        <CommentMap>
          <Row key={props.el?._id}>
            <CommentProfileImageBox>
              <CommentProfileImage src="/images/profile.png" />
            </CommentProfileImageBox>
            <MapBox>
              <MapWriteRating>
                <MapWriter>{props.el?.writer}</MapWriter>
                <MapRating>
                  <Rate disabled defaultValue={props.el?.rating} />
                </MapRating>
              </MapWriteRating>
              <MapContents>{props.el?.contents}</MapContents>
            </MapBox>

            <EditBox>
              <CommentEditButton
                id={props.el?._id}
                src="/images/edit.png"
                onClick={props.onClickCommentEdit}
              />
              <CommentDeleteButton
                src="/images/delete.png"
                onClick={props.onClickCommentDelete}
                id={props.el?._id}
              />
            </EditBox>
          </Row>
          <MapDate>{props.el?.createdAt.slice(0, 10)}</MapDate>
        </CommentMap>
      )}
      {props.isEdit && (
        <CommentWrite
          isEdit={props.isEdit}
          commentdata={props.commentdata}
          el={props.el}
          setIsEdit={props.setIsEdit}
        />
      )}
    </Wrapper>
  );
}
