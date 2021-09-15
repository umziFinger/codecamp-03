import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarWrapper = styled.div`
  width: 1920px;
  display: flex;
`;

const Sidebar = styled.div`
  background-color: yellow;
  width: 300px;
`;

const Body = styled.div`
  /* background-color: green; */
  width: 1620px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

// const HIDDEN_HEADER = []

export default function Layout(props) {
  return (
    <Wrapper>
      {/* <Header>여기는 헤더영역입니다</Header> */}
      <LayoutHeader />
      <SidebarWrapper>
        <Sidebar>여기는 사이드바영역입니다</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      <LayoutFooter />
      {/* <Footer>여기는 푸터영역입니다</Footer> */}
    </Wrapper>
  );
}
