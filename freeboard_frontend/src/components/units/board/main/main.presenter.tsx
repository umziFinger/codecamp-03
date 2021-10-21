import {
  GoToHomePage,
  Introduce1,
  Introduce2,
  Introduce3,
  IntroduceCircle1,
  IntroduceCircle2,
  IntroduceCircle3,
  IntroduceWrapper,
  Wrapper,
} from "./main.styled";

export default function MainPageUI(props) {
  return (
    <>
      <Wrapper>
        <IntroduceWrapper>
          <IntroduceCircle1>
            <Introduce1>내 주변 술집 찾기</Introduce1>
          </IntroduceCircle1>
          <IntroduceCircle2>
            <Introduce2>원하는 분위기 찾기</Introduce2>
          </IntroduceCircle2>
          <IntroduceCircle3>
            <Introduce3>실시간 술집 사람 수</Introduce3>
          </IntroduceCircle3>
        </IntroduceWrapper>
        <GoToHomePage onClick={props.onClickMoveToHomePage}>
          홈페이지 바로가기
        </GoToHomePage>
      </Wrapper>
    </>
  );
}
