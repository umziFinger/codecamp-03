import {
  Address,
  AddressDetail,
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
  Row,
  SelectPhoto,
  Title,
  Upload,
  Wrapper,
  Wrapper1,
} from "./createProduct.styles";

export default function CreateProductUI() {
  return (
    <Wrapper1>
      <Wrapper>
        <Title>상품 등록하기</Title>
        <Row>
          <Label>상품명</Label>
          <InputBox type="text" placeholder="상품명을 작성해주세요" />
        </Row>
        <Row>
          <Label>한줄요약</Label>
          <InputBox type="text" placeholder="상품명을 작성해주세요" />
        </Row>
        <Row>
          <Label>상품설명</Label>
          <ProductDetail type="text" placeholder="상품명을 작성해주세요" />
        </Row>
        <Row>
          <Label>판매가격</Label>
          <InputBox type="text" placeholder="상품명을 작성해주세요" />
        </Row>
        <Row>
          <Label>태그입력</Label>
          <InputBox type="text" placeholder="상품명을 작성해주세요" />
        </Row>
        <Location>
          <div>
            <Label>거래위치</Label>
            <Map></Map>
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
          <div>
            <Upload src="/images/upload.png" />
            <Upload src="/images/upload.png" />
          </div>
        </Photo>
        <SelectPhoto>
          <Label>메인사진 설정</Label>
          <Radio type="radio" name="aaa" /> 사진1
          <Radio type="radio" name="aaa" /> 사진2
        </SelectPhoto>
        <div>
          <CreateButton>등록하기</CreateButton>
        </div>
      </Wrapper>
    </Wrapper1>
  );
}
