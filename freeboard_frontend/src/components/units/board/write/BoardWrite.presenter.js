import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

import {
  Wrapper1,
  Wrapper,
  Title,
  NamePw,
  Name,
  TitleContents,
  Title2,
  Content,
  Adress,
  AdressNumber,
  AdressButton,
  DetailAdress,
  YoutubeLink,
  Photo,
  GetPhoto,
  MainSetting,
  Confirm,
  Option,
  Star,
  ErrorMessage,
  Neyoung,
  Youtube,
  YoutubeRadio,
  Cancle,
  Footer,
  AdressSearchBox,
  DetailAdress1,
  DetailAdress2,
} from "./BoardWrite.styled";

export default function BoardWriteUI(props) {
  console.log(props.myZipcode);
  return (
    <Wrapper1>
      <Wrapper>
        <Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Title>
        <NamePw>
          <div>
            작성자
            <Star>*</Star>
            <br />
            <Name
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <ErrorMessage>{props.nameError}</ErrorMessage>
          </div>
          <div>
            비밀번호
            <br />
            <Name
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <ErrorMessage>{props.passwordError}</ErrorMessage>
          </div>
        </NamePw>
        <TitleContents>
          제목
          <br />
          <Title2
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <ErrorMessage>{props.itleError}</ErrorMessage>
          <Neyoung>내용</Neyoung>
          <br />
          <Content
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContent}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <ErrorMessage>{props.contentError}</ErrorMessage>
        </TitleContents>
        <Adress>
          주소
          <AdressSearchBox>
            <AdressNumber>{props.myZipcode}</AdressNumber>
            <div>
              <AdressButton onClick={props.onToggleZipcode}>
                우편번호 검색
              </AdressButton>
              {props.isOpen && (
                <Modal
                  visible={true}
                  onCancel={props.onToggleZipcode}
                  onOk={props.onToggleZipcode}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </div>
          </AdressSearchBox>
          <DetailAdress1>{props.myAddress}</DetailAdress1>
          <DetailAdress2 type="text" onChange={props.onChangeAddressDetail} />
        </Adress>
        <Youtube>
          유튜브
          <br />
          <YoutubeLink
            type="text"
            placeholder="링크를 복사해주세요."
            defaultValue={props.data?.fetchBoard.youtubeUrl}
            onChange={props.onChangeYoutubeUrl}
          />
        </Youtube>
        <div>
          사진 첨부
          <GetPhoto>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
            <Photo>
              <div>+</div>
              <div>Upload</div>
            </Photo>
          </GetPhoto>
        </div>
        <MainSetting>
          메인 설정
          <Option>
            <input type="radio" name="a" /> 유튜브
            <input type="radio" name="a" /> 사진
          </Option>
        </MainSetting>

        {props.isEdit ? (
          <Footer>
            <Cancle onClick={props.onClickCancle}>취소하기</Cancle>
            <Confirm
              onClick={props.check}
              buttonColor={props.buttonColor}
              disabled={!props.buttonColor}
            >
              수정하기
            </Confirm>
          </Footer>
        ) : (
          <Confirm
            onClick={props.check}
            buttonColor={props.buttonColor}
            disabled={!props.buttonColor}
          >
            등록하기
          </Confirm>
        )}
        {!props.isEdit ? (
          <Modal
            visible={props.modalVisible}
            onCancel={props.closeModal}
            onOk={props.closeModal}
          >
            게시물 등록이 완료되었습니다.
          </Modal>
        ) : (
          <Modal
            visible={props.modalVisible}
            onCancel={props.closeModal}
            onOk={props.closeModal}
          >
            게시물 수정이 완료되었습니다.
          </Modal>
        )}
        {/* <Confirm onClick={props.check} buttonColor={props.buttonColor} disabled={!props.buttonColor}>등록하기</Confirm>
                <button>취소하기</button>
                <Confirm onClick={props.check} buttonColor={props.buttonColor} disabled={!props.buttonColor}>수정하기</Confirm> */}
      </Wrapper>
    </Wrapper1>
  );
}
