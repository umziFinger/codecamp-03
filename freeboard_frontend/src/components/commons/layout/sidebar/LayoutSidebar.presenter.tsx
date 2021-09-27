import { Menu, MenuWrapper, Wrapper } from "./LayoutSidebar.styled";

export default function LayoutSidebarUI(props) {
  return (
    <Wrapper>
      <MenuWrapper>
        <Menu onClick={props.onClickList}>게시글 목록</Menu>
        <Menu onClick={props.onClickWrite}>게시글 작성</Menu>
        <Menu></Menu>
      </MenuWrapper>
    </Wrapper>
  );
}
