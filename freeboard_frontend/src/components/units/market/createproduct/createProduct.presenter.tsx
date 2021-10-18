import SubmitButton from "../../../commons/buttons/submitButton/submitButton";
import ErrorMessage from "../../../commons/errors/errorMessage/errorMessage";
import UpLoads02 from "../../../commons/uploads/02/uploads02.container";
import {
  Address,
  AddressDetail,
  Cancel,
  CreateButton,
  GpsButton,
  InputBox,
  Label,
  Location,
  LocationRight,
  Map,
  Photo,
  ProductDetail,
  Radio,
  ReactQuillBox,
  Row,
  SelectPhoto,
  Title,
  Upload,
  Wrapper,
  Wrapper1,
} from "./createProduct.styles";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function CreateProductUI(props) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}
    >
      <Wrapper1>
        <Wrapper>
          {props.isEdit ? (
            <Title>상품 수정하기</Title>
          ) : (
            <Title>상품 등록하기</Title>
          )}
          <Row>
            <Label>상품명</Label>
            <InputBox
              type="text"
              placeholder="상품명을 작성해주세요"
              {...props.register("name")}
              defaultValue={props.data?.fetchUseditem.name}
            />
            <ErrorMessage message={props.formState.errors.name?.message} />
          </Row>
          <Row>
            <Label>한줄요약</Label>
            <InputBox
              type="text"
              placeholder="한줄요약을 작성해주세요"
              {...props.register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <ErrorMessage message={props.formState.errors.remarks?.message} />
          </Row>
          <Row>
            <Label>상품설명</Label>
            <ReactQuillBox
              onChange={props.onChangeContents}
              placeholder="상품설명을 작성해주세요"
              // {...props.register("contents")}
              defaultValue={props.data?.fetchUseditem.contents}
            />
            {/* <ProductDetail
              type="text"
              placeholder="상품설명을 작성해주세요"
              {...props.register("contents")}
              defaultValue={props.data?.fetchUseditem.contents}
            /> */}
            <ErrorMessage message={props.formState.errors.contents?.message} />
          </Row>
          <Row>
            <Label>판매가격</Label>
            <InputBox
              type="text"
              placeholder="판매가격을 입력해주세요"
              {...props.register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <ErrorMessage message={props.formState.errors.price?.message} />
          </Row>
          <Row>
            <Label>태그입력</Label>
            <InputBox
              type="text"
              placeholder="#태그 #태그 #태그"
              {...props.register("tags")}
            />
          </Row>
          <Location>
            <div>
              <Label>거래위치</Label>
              <Map id="map"></Map>
            </div>
            <div>
              <div>
                <Label>GPS</Label>
                <GpsButton>위도(LAT)</GpsButton>
                <GpsButton>경도(LNG)</GpsButton>
              </div>
              <Address>
                <Label>주소</Label>
                <AddressDetail></AddressDetail>
                <AddressDetail></AddressDetail>
              </Address>
            </div>
          </Location>
          <Photo>
            <Label>사진첨부</Label>
            <Upload>
              {new Array(2).fill(1).map((el, index) => (
                <UpLoads02
                  defaultFile={props.data?.fetchUseditem.images?.[index]}
                  key={el.index}
                  onChangeFile={props.onChangeFile}
                  index={index}
                  register={props.register("images")}
                />
              ))}

              {/* <Upload src="/images/upload.png" />
              <Upload src="/images/upload.png" /> */}
            </Upload>
          </Photo>
          <SelectPhoto>
            <Label>메인사진 설정</Label>
            <Radio type="radio" name="aaa" /> 사진1
            <Radio type="radio" name="aaa" /> 사진2
          </SelectPhoto>
          <div>
            {props.isEdit ? (
              <>
                <Cancel onClick={props.updateCancel}>취소하기</Cancel>
                <SubmitButton
                  name="수정하기"
                  isValid={props.formState.isValid}
                />
              </>
            ) : (
              <SubmitButton name="등록하기" isValid={props.formState.isValid} />
            )}
          </div>
        </Wrapper>
      </Wrapper1>
    </form>
  );
}
