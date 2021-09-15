import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const SidebarWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: yellow;
  width: 300px;
`;

const Body = styled.div``;

const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

// const HIDDEN_HEADER = []

export default function Layout(props) {
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더영역입니다</Header> */}
      <LayoutHeader />
      <SidebarWrapper>
        <Sidebar>여기는 사이드바영역입니다</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터영역입니다</Footer> */}
    </Wrapper>
  );
}
