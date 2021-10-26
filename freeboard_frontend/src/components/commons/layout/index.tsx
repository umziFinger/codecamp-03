import styled from "@emotion/styled";
import { useRouter } from "next/router";
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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  /* background-color: green; */
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  /* margin-left: 100px; */
`;

const HIDDEN_PAGE = [`/main`];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenPage = HIDDEN_PAGE.includes(router.pathname);

  return (
    <Wrapper>
      <LayoutHeader />
      {!isHiddenPage && <LayoutBanner />}
      <SidebarWrapper>
        {!isHiddenPage && <LayoutSidebar />}
        <Body>{props.children}</Body>
      </SidebarWrapper>
    </Wrapper>
  );
}
