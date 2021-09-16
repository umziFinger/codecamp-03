import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutSidebar from "./sidebar/LayoutSidebar.container";

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
      <LayoutHeader />
      <LayoutBanner />
      <SidebarWrapper>
        <LayoutSidebar />
        <Body>{props.children}</Body>
      </SidebarWrapper>
    </Wrapper>
  );
}
